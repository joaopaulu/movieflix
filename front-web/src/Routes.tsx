import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import history from './core/utils/history';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/Catalog/components/MovieDetails';

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
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
