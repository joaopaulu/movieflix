import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';

import './styles.scss';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  return (
    <nav className="bg-primary main-nav row">
      <div className="col-11">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
      </div>
      <div className="col-1">
        <div className="user-info-dnone text-right">
          {currentUser && (
            <>
              <button
                type="button"
                className="btn-out btn-outline-secondary btn"
                onClick={handleLogout}
              >
                Sair
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
