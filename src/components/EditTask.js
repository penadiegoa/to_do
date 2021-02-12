import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './EditTask.css';

const EditTask = props => {

  const history = useHistory();

  const id = props.location.state.id;
  const done = props.location.state.done;
  const titleInit = props.location.state.title;
  const descriptionInit = props.location.state.description;
  const [title, setTitle] = useState(props.location.state.title);
  const [description, setDescription] = useState(props.location.state.description);

  const editHandler = event => {
    event.preventDefault();

    if (title !== titleInit || description !== descriptionInit) {
      const updatedTask = JSON.stringify({
        title: title,
        description: description,
        done: done
      });
      axios.put('/items/'+id, updatedTask)
        .then(resp => {
          console.log(resp);
          history.push('/');
        }).catch(error => {
          console.log(error);
        });
    } else {
      alert("Task info didn't change");
    };
  };

  return (
    <div className="form-container">
      <Link to="/">
        <button className="btn">
          Back
        </button>
      </Link>

      <h2>Edit task:</h2>
      <form onSubmit={editHandler}>
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