import { forwardRef, useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Friend } from './friend';

import { useFirestore, useUser } from '@Lib/firebase';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.black.main
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoveDialog = ({ open, close, save }) => {

  const classes = useStyles();

  const [users, setUsers] = useState([]);

  const [userHugs, setUserHugs] = useState([]);

  const firestore = useFirestore();
  
  const currentUser = useUser();

  useEffect(() => {

    if (!currentUser.uid) return;

    firestore
      .collection('users')
      .get()
      .then(response => {

        const users = response.docs.map(d => d.data()).filter(user => user.uid !== currentUser.uid);

        setUsers(users);

      });

  }, [currentUser]);

  const onUpdate = ({ uid, hugs, hugsEarned, hugsGiven, hugsRemained }) => {
    const data = [...userHugs];
    const user = data.find(user => user.uid === uid);

    if (user) user.hugs = hugs;
    else data.push({ uid, hugs, hugsEarned, hugsGiven, hugsRemained });

    setUserHugs(data.filter(user => user.hugs != 0));
  };


  return (
    <Dialog
      fullScreen
      open={open}
      onClose={close}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={close}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Show Your Love
          </Typography>
          <Button autoFocus color="inherit" onClick={() => save(userHugs)}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>{users.map(user => <Friend {...user} onUpdate={onUpdate} currentUser={currentUser} />)}</List>
    </Dialog>
  );
};

export { LoveDialog };
