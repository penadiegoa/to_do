import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
  Card, 
  Menu,
  Avatar, 
  MenuItem,
  CardHeader, 
  IconButton, 
  Typography, 
  CardContent,
} from "@material-ui/core";
import './Task.css';

const Task = props => {

  const done = props.done ? <DoneIcon style={{ fontSize: 45 }}/> : ""
  
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(false);
  
  const handleClick = () => {
    setAnchorEl(true);
  };

  const handleClose = event => {
    setAnchorEl(false);
    const opt = event.target.id;
    if (opt === 'delete') {
      props.deleteHandler(props.id);
    };
  };


  return (
    <Card>
      <CardHeader
        title={props.title}
        subheader={props.created}
        avatar={
          <Avatar 
            aria-label="checkbox" 
            className="checkbox" 
            onClick={() => 
              props.statusHandler(props.id, props.title, props.description, props.done)
            }>
            {done}
          </Avatar>
        }
        action={
          <div>
            <IconButton 
              className="edit"
              aria-label="settings" 
              buttonRef={buttonRef}
              aria-haspopup="true"
              aria-controls={anchorEl ? "simple-menu" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              keepMounted
              anchorEl={buttonRef.current}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link 
                to={{
                  pathname: '/edit', 
                  state: {
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    done: props.done
                  }
                }}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <MenuItem id="edit">
                  <EditIcon/> Edit
                </MenuItem>
              </Link>
              <MenuItem 
                id="delete" 
                onClick={handleClose}
                style={{
                  color:'red',
                  justifyContent: 'space-around',
                }}
                >
                <DeleteIcon/> Delete
              </MenuItem>
            </Menu>
          </div>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Task;