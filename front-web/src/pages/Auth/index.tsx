import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const Auth = () => (
  <div className="auth-container">
    <div className="auth-info">
      <h1 className="auth-info-title"> Avalie Filmes</h1>
      <p className="auth-info-subtitle">
        Diga o que você achou do seu filme favorito
      </p>
      <AuthImage className="main-image" />
    </div>
    <div className="auth-content">
      <div>
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/register">
            <h1>Cadastro</h1>
          </Route>
          <Route path="/auth/recover">
            <h1>Recuperação de Senha</h1>
          </Route>
        </Switch>
      </div>
    </div>
  </div>
);

export default Auth;
