import { useForm } from "react-hook-form"; 
import axios from "axios";

function Admin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data) {
    axios.post("http://localhost:8000/admin/podcasts" , {
      name : data.name,
      description : data.description,
      category : data.category,
      type : data.type,
      speaker : data.speaker,
      file : data.file
    })
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" {...register("name")}/>
        <input type="text" name="description" {...register("description")}/>
        <input type="text" name="category" {...register("category")}/>
        <input type="text" name="type" {...register("type")}/>
        <input type="text" name="speaker" {...register("speaker")}/>
        <input type="text" name="file" {...register("file")}/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Admin;
