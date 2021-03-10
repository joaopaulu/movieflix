import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>MovieFlix</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
