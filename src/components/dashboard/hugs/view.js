import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from '@material-ui/core/Typography';

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
}));

const HugsView = ({
  loveDialogOpen,
  openLoveDialog,
  closeLoveDialog
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
      <LoveDialog open={loveDialogOpen} close={closeLoveDialog} />
    </>
  );
};

export { HugsView };
