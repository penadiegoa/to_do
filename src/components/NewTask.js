import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Form.css';


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
        // console.log(resp);
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
          id="title"
          type="text" 
          name="title" 
          value={title} 
          required={true}
          className="form-input"
          placeholder="ex. Wash the dishes..."
          onChange={event => {setTitle(event.target.value)}}
        />
        
        <label htmlFor="description">Description</label>
        <textarea 
          cols="50" 
          rows="10"
          id="description"
          name="description" 
          value={description}
          className="form-input"
          onChange={event => {setDescription(event.target.value)}}>
        </textarea>

        <div className="form-done">
          <label htmlFor="done">Already Done?</label>
          <input 
            id="done"
            name="done" 
            type="checkbox" 
            className="form-input"
            />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTask;