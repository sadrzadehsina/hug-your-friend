import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AccountLayout, DashboardLayout } from '@Layouts';
import { Landing } from '@Components/landing';
import { Hugs } from '@Components/dashboard';

export default function App() {
  
  return (
    <Router>
      <Switch>

        <Route path="/dashboard/:path?" exact>
          <DashboardLayout>
            <Switch>
              <Route path="/dashboard/hugs" component={Hugs} />
            </Switch>
          </DashboardLayout>
        </Route>

        <Route path="/" component={Landing} />

      </Switch>
    </Router>
  );

};