import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LandingLayout, DashboardLayout } from '@Layouts';
import { Intro, SignIn } from '@Components/landing';
import { Hugs } from '@Components/dashboard';

export default function App() {
  
  return (
    <Router>
      <Switch>

        <Route path="/landing/:path?" exact>
          <LandingLayout>
            <Switch>
              <Route path="/landing/intro" component={Intro} />
              <Route path="/landing/signin" component={SignIn} />
            </Switch>
          </LandingLayout>
        </Route>

        <Route path="/dashboard/:path?" exact>
          <DashboardLayout>
            <Switch>
              <Route path="/dashboard/hugs" component={Hugs} />
            </Switch>
          </DashboardLayout>
        </Route>

        <Redirect to="/landing/intro" />

      </Switch>
    </Router>
  );

};