import { useState } from "react";
import { Link } from "react-router-dom";

const EditTask = props => {

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const updateHandler = event => {
    // TO DO: determine if post changed at all
    // TO DO: UPDATE request to API
  }

  return (
    <div className="form-container">
      <Link to="/">
      <button className="btn">
        Back
      </button>
      </Link>
      <h2>Edit task:</h2>
      <form onSubmit={updateHandler}>
        <label htmlFor="title">Title</label>
        <input 
          className="form-input"
          type="text" 
          name="title" 
          id="title"
          value={title} 
          onChange={event => {setTitle(event.target.value)}}
        />
        
        <label htmlFor="description">Description</label>
        <textarea 
          className="form-input"
          cols="40" 
          rows="10"
          name="description" 
          id="description"
          value={description}
          onChange={event => {setDescription(event.target.value)}}>
        </textarea>

        <button className="btn" type="submit">
          Update
        </button>
      </form>

    </div>
  )
};

export default EditTask;