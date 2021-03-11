import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import history from './core/utils/history';
import Catalog from 'pages/Catalog';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Catalog />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
