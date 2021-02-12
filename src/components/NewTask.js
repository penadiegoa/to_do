import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NewTask.css';


const NewTask = () => {

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const submitHandler = event => {
    event.preventDefault();

    const done = event.target.done.checked;
    const newTask = JSON.stringify({
      title: title,
      description: description,
      done: done
    });
    
    axios.post('/items', newTask)
      .then(resp => {
        console.log(resp);
        history.push('/');
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <Link to="/">
      <button className="btn">
        Back
      </button>
      </Link>
      <h2>Add a new task:</h2>
      <form onSubmit={submitHandler}>
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

        <label htmlFor="done">Already Done?</label>
        <input 
          className="form-input"
          type="checkbox" 
          name="done" 
          id="done"
        />

        <button className="btn" type="submit">
          Submit
          </button>
      </form>
    </div>
  );
};

export default NewTask;