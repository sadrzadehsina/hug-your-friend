import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
		minHeight: '100vh',
		width: '100%'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

const Landing = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Everything is love
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Life is 10% what happens to you and 90% how you react to it.'}
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">Made with Love for All Lovers...</Typography>
        </Container>
      </footer>
    </div>
  );
};

export { Landing };