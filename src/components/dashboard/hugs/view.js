import { createRef, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { LoveDialog } from './love-dialog';

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
  report: {
    padding: theme.spacing(0, 0, 2, 0)
  },
}));

const HugsView = ({
  user,
  loveDialogOpen,
  openLoveDialog,
  closeLoveDialog,
  saveHugs
}) => {

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
          <Grid item style={{ width: '60%' }}>
            <Typography variant="h2" className={classes.text} gutterBottom>Dear {user.displayName}</Typography>
            <div className={classes.report}>
              <Typography variant="body1" className={classes.text}>
                The good news is, you have earned <strong>{user.hugsEarned}</strong><FavoriteIcon color="primary" /> so far.
              </Typography>
              <Typography variant="body1" className={classes.text}>
                You have spread your love by giving <strong>{user.hugsGiven}</strong><FavoriteIcon color="primary" /> in January. 
              </Typography>
              <Typography variant="body1" className={classes.text} gutterBottom>
                You still have <strong>{user.hugsRemained}</strong><FavoriteIcon color="primary" /> loves to spread in this month.
              </Typography>
            </div>
            <div className={classes.motivation}>
              <Typography variant="h6" className={classes.text}>
                Everything is friendship, you can earn it or spread it as you go.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} className={classes.right}>
        <a href="#" onClick={openLoveDialog} className="heart-link">
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
      <LoveDialog open={loveDialogOpen} close={closeLoveDialog} save={saveHugs} />
    </>
  );
};

export { HugsView };
