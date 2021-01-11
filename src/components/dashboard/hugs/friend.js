
import { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import FavoriteIcon from "@material-ui/icons/Favorite";

const Friend = ({ uid, avatar, displayName, hugsEarned, hugsGiven, hugsRemained, onUpdate, currentUser }) => {

  const [hugs, setHugs] = useState(0);

  const thumbUp = () => setHugs(prev => {
    const newValue = prev + 1;
    if ((prev + 1) > currentUser.hugsRemained) console.log('you have no more hugs to give');
    onUpdate({ uid, hugs: newValue, hugsEarned, hugsGiven, hugsRemained });
    return newValue;
  });

  const thumbDown = () => setHugs(prev => {
    const newValue = prev - 1; 
    onUpdate({ uid, hugs: newValue, hugsEarned, hugsGiven, hugsRemained });
    return newValue;
  });

  return (
    <ListItem key="1">
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={displayName} />
      <ListItemSecondaryAction>
        {
          hugs != 0 && (
            <>
              <FavoriteIcon color="primary" className="heart" />
              <span>{hugs}</span>
            </>
          )
        }
        {
          hugs != 0 && (
            <IconButton
              edge="end"
              aria-label="stop"
              onClick={thumbDown}
            >
              <ThumbDownIcon />
            </IconButton>
          )
        }
        <IconButton
          edge="end"
          aria-label="stop"
          onClick={thumbUp}
        >
          <ThumbUpIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { Friend };
