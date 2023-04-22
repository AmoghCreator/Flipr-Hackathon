import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import NoPage from "./pages/NoPage";
<<<<<<< HEAD
import { Favorite } from "@mui/icons-material";
import Favourites from "./pages/Favourites";
import Explore from "./pages/Explore";
=======
import Admin from "./pages/Admin"
import axios from "axios";
>>>>>>> 4f26afe97e2f1659d1da9ae1f87d558dfe973d1c

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Admin" element={<Admin/>} />
        <Route path="Audio" element={<Audio />} />
        <Route path="Video" element={<Video />} />
        <Route path="Favourites" element={<Favourites />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
