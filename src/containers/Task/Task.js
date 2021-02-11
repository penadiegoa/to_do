import MoreVertIcon from "@material-ui/icons/MoreVert";
import DoneIcon from "@material-ui/icons/Done";
import { 
  Card, 
  Avatar, 
  CardHeader, 
  IconButton, 
  Typography, 
  CardContent, 
} from "@material-ui/core";
import './Task.css';

const Task = props => {

  const done = props.done ? <DoneIcon style={{ fontSize: 45 }}/> : ""
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
          <IconButton aria-label="settings" className="edit">
            <MoreVertIcon />
          </IconButton>
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