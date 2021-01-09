import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from '@material-ui/core/Paper';

import { FriendsHugging } from './friends-hugging';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
		minHeight: '100vh',
		width: '100%'
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  image: {

  }
}));

const Landing = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Everything is a simple Hug
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Somethimes when you don't know what to say, a hug says enough 🤗 
        </Typography>
      </Container>
      <div>
        <Container maxWidth="md">
          <Paper variant="outlined" square><FriendsHugging /></Paper>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">Made with <FavoriteIcon color="primary" /> for all huggers!</Typography>
        </Container>
      </footer>
    </div>
  );
};

export { Landing };