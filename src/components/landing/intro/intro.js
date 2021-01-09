import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { FriendsHugging } from './friends-hugging';

const Intro = () => {
  return (  
    <div>
      <Container maxWidth="md">
        <Paper variant="outlined" square><FriendsHugging /></Paper>
      </Container>
    </div>
  );
};

export { Intro };