import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Friend = ({ user }) => {
  return (
    <ListItem key="1">
      <ListItemAvatar>
        <Avatar src="https://i.pravatar.cc/40" />
      </ListItemAvatar>
      <ListItemText primary="Sina Sadrzadeh" />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="stop"
          onClick={() => console.log("thumbs up")}
        >
          <ThumbUpIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="stop"
          onClick={() => console.log("thumbs down")}
        >
          <ThumbDownIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { Friend };
