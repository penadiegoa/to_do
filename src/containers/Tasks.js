import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Task from "../components/Task"
import './Tasks.css';

const Tasks = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/items/').then(resp => {
      const latestTasks = [];
      resp.data.forEach(task => {
        latestTasks.push({
          id: task.id,
          title: task.title,
          description: task.description,
          created: new Date(task.created).toLocaleDateString('en-US'),
          done: task.done
        });
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
      // console.log(resp);
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

  const deleteHandler = id => {
    axios.delete('/items/'+id).then(resp => {
      // console.log(resp);
      const updatedTasks = [];
      tasks.forEach(task => {
        if (task.id !== id) {
          updatedTasks.push(task);
        };
      });
      setTasks(updatedTasks);
    }).catch(error => {
      console.log(error);
    });
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
        {tasks.map(task => 
          <Task 
            key={task.id}
            id={task.id}
            title={task.title}
            created={task.created}
            description={task.description}
            done={task.done}
            // editHandler={editHandler}
            statusHandler={statusHandler}
            deleteHandler={deleteHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;