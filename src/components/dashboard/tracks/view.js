import { forwardRef } from 'react';
import { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Song } from "./song";

import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  left: {
    minHeight: "100%",
    backgroundColor: theme.palette.black.main,
  },
  right: {
    minHeight: "100%",
    backgroundColor: theme.palette.white.main,
  },
  text: {
    color: theme.palette.white.main
  },
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

const TracksView = ({ heartClick, handleClose, open }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={6} className={classes.left}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
          style={{ minHeight: '100%' }}
        >
          <Grid item md="6">
            <Typography variant="h2" color="white" className={classes.text} gutterBottom>Dear Sina</Typography>
            <Typography variant="body1" color="white" className={classes.text}>
              The good news is, you have earned <strong>156</strong><FavoriteIcon color="primary" /> so far in January.
            </Typography>
            <Typography variant="body1" color="white" className={classes.text} gutterBottom>
              Everything is friendship, you can earn it or spread it as you go.
            </Typography>
            <Typography variant="body1" color="white" className={classes.text}>
              Show others your love...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} className={classes.right}>
        <a href="#" onClick={heartClick} className="heart-link">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
            style={{ minHeight: '100%' }}
          >
            <Grid item>
              <FavoriteIcon color="primary" style={{ fontSize: 500 }} className="heart" />
            </Grid>
          </Grid>
        </a>
      </Grid>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>

    </>
  );
};

export { TracksView };
