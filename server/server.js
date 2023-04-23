const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer().any());
app.use(passport.initialize());
app.use(cors());


mongoose.connect('mongodb+srv://amoghpreneur:MongoLogin@cluster0.uz1gyvm.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


const User = mongoose.model('User', {
    email: { type: String, required: true },
    password: { type: String, required: true },
    // add any other fields you need for user data
});

const Podcast = mongoose.model('Podcast', {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['Audio', 'Video'], required: true },
    speaker: { type: String, required: true },
    file: { type: String, required: true },
});

passport.use(new GoogleStrategy({
    clientID: 'your-google-client-id',
    clientSecret: 'your-google-client-secret',
    callbackURL: 'your-google-callback-url',
}, (accessToken, refreshToken, profile, done) => {
    // handle Google OAuth callback and create/update user in database
}));


// User login endpoint
app.post('/login', (req, res) => {
    // handle user login
    const { email, password } = req.body;
    // Find user in the database based on email
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // Compare password with stored hash
            if (user.password === password) {
                // Return success message and user data
                return res.json({ message: 'Login successful', user });
            } else {
                return res.status(401).json({ message: 'Incorrect password' });
            }
        })
        .catch(err => {
            console.error('Error during login', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// User signup endpoint
app.post('/signup', (req, res) => {
const { email, password } = req.body;
    // Check if user with the same email already exists
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(409).json({ message: 'User already exists' });
            }
            // Create a new user
            const newUser = new User({ email, password });
            newUser.save()
                .then(user => {
                    // Return success message and user data
                    return res.json({ message: 'Signup successful', user });
                })
                .catch(err => {
                    console.error('Error during signup', err);
                    res.status(500).json({ message: 'Internal server error' });
                });
        })
        .catch(err => {
            console.error('Error during signup', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});


app.get('/podcasts/search', (req, res) => {
    const { query } = req.query;
    // Search podcasts based on query in name and description fields
    Podcast.find({ $or: [{ name: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] })
        .then(podcasts => {
            // Return matching podcasts
            return res.json(podcasts);
        })
        .catch(err => {
            console.error('Error during podcast search', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Set destination folder for uploaded files
        cb(null, __dirname + '/uploads/');
    },
    filename: (req, file, cb) => {
        // Set filename as current timestamp + original file extension
        const ext = file.originalname.split('.').pop();
        cb(null, Date.now() + '.' + ext);
    }
});

// Create multer upload instance
const upload = multer({ storage });

// Admin panel endpoint - create a new podcast
app.post('/admin/podcasts', upload.single('file'), (req, res) => {
    const { name, description, category, type, speaker } = req.body;
    const file = req.file;
    // Create new podcast object
    const newPodcast = new Podcast({
        name,
        description,
        category,
        type,
        speaker,
        file: {
            filename: file.filename,
            originalname: file.originalname
        }
    });
    // Save new podcast to the database
    newPodcast.save()
        .then(savedPodcast => {
            // Return success message and saved podcast data
            return res.json({ message: 'Podcast created successfully', podcast: savedPodcast });
        })
        .catch(err => {
            console.error('Error during podcast creation', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

app.get('/admin/podcasts', (req, res) => {
    // Get all podcasts from the database
    Podcast.find()
        .then(podcasts => {
            // Return all podcasts
            return res.json(podcasts);
        })
        .catch(err => {
            console.error('Error during getting all podcasts', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});


app.get('/admin/podcasts/:id', (req, res) => {
    const { id } = req.params;
    // Find podcast by ID in the database
    Podcast.findById(id)
        .then(podcast => {
            if (!podcast) {
                return res.status(404).json({ message: 'Podcast not found' });
            }
            // Return podcast data
            return res.json(podcast);
        })
        .catch(err => {
            console.error('Error during getting podcast by ID', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// Admin panel endpoint - update a podcast by ID
app.put('/admin/podcasts/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, category, type, speaker } = req.body;
    // Find podcast by ID in the database
    Podcast.findById(id)
        .then(podcast => {
            if (!podcast) {
                return res.status(404).json({ message: 'Podcast not found' });
            }
            // Update podcast data
            podcast.name = name;
            podcast.description = description;
            podcast.category = category;
            podcast.type = type;
            podcast.speaker = speaker;
            if (req.file) {
                podcast.file = req.file;
            }
            podcast.save()
                .then(updatedPodcast => {
                    // Return success message and updated podcast data
                    return res.json({ message: 'Podcast updated successfully', podcast: updatedPodcast });
                })
                .catch(err => {
                    console.error('Error during podcast update', err);
                    res.status(500).json({ message: 'Internal server error' });
                });
        })
        .catch(err => {
            console.error('Error during getting podcast by ID', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

// Admin panel endpoint - delete a podcast by ID
app.delete('/admin/podcasts/:id', (req, res) => {
    const { id } = req.params;
    // Find podcast by ID in the database
    Podcast.findByIdAndDelete(id)
        .then(podcast => {
            if (!podcast) {
                return res.status(404).json({ message: 'Podcast not found' });
            }
            // Return success message
            return res.json({ message: 'Podcast deleted successfully' });
        })
        .catch(err => {
            console.error('Error during podcast deletion', err);
            res.status(500).json({ message: 'Internal server error' });
        });
});

app.listen(8000 , () => console.log("started"));
