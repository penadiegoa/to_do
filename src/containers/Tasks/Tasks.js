import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Task from "../Task/Task"

const Tasks = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/items/').then(resp => {
      const latestTasks = [];
      resp.data.forEach(post => {
        latestTasks.push(post);
      });
      setTasks(latestTasks);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const statusHandler = (id, title, description, done) => {
    const updatedTask = JSON.stringify({
      title: title,
      description: description,
      done: !done
    });

    axios.put('/items/'+id, updatedTask).then(resp => {
      console.log(resp);
      const updatedTasks = [];
      tasks.forEach(task => {
        if (task.id === id) {
          const edited = {...task};
          edited.done = !done;
          updatedTasks.push(edited);
        } else {
          updatedTasks.push(task);
        };
      });
      setTasks(updatedTasks);
    }).catch(error => {
      console.log(error);
    });
  };

  const taskEditHandler = () => {
    // TO DO: edit body of task
  };

  return (
    <div>
      <div className="controls">
        <Link to="/add">
          <button className="btn">
              Add
          </button>
        </Link>
      </div>
      <div className="tasks-container">
        {tasks.map(post => 
          <Task 
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            done={post.done}
            statusHandler={statusHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;