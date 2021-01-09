import { useHistory } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";

import { useAuth } from '@Lib/firebase/use-auth';
import { useToast } from '@Lib/toasts/use-toast';

const useStyles = makeStyles(theme => ({
	root: {
    backgroundColor: theme.palette.white.main
  },
}));

const DashboardLayout = ({ children }) => {

  const history = useHistory();

  const toast = useToast();

  const classes = useStyles();
  
  const { signOut, currentUser } = useAuth();

  const doSignOut = () =>
    signOut()
      .then(() => {
        toast.show({ message: 'You have successfully signed out!' });
        history.push('/tracks/account/signin');
      })
      .catch(error => toast.show({ message: error.message, type: 'error' }));

  return (
    <Grid 
      container
      direction="row"
      className={classes.root}
    >
      {children}
    </Grid>
  );
};

export { DashboardLayout };
