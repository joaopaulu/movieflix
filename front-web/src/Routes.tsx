import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import history from './core/utils/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
