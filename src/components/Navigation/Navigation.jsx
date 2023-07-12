import { useLocation, useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { logout } from 'slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { login, register, baseUrl } = useRouting();
  const { currentUser } = useSelector(state => state.user);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isActive = page => {
    return location.pathname.includes(page);
  };
  const location = useLocation();
  const handleLogOut = () => {
    dispatch(logout({}));
    navigate(baseUrl);
  };
  const handleClick = to => {
    navigate(to);
  };

  return (
    <header>
      <nav>
        <ul className="nav">
          <li>
            <Button
              className={!isActive('/') ? 'nav-el active' : 'nav-el'}
              onClick={() => handleClick(baseUrl)}
            >
              Home
            </Button>
          </li>
          {!contacts && (
            <li>
              <Button
                className={isActive('/') ? 'nav-el active' : 'nav-el'}
                onClick={() => handleClick(register)}
              >
                Register
              </Button>
            </li>
          )}

          <li>
            {currentUser ? (
              <Button
                onClick={handleLogOut}
                className={isActive('/') ? 'nav-el active' : 'nav-el'}
                to={login}
              >
                Log out
              </Button>
            ) : (
              <Button
                className={isActive('/') ? 'nav-el active' : 'nav-el'}
                onClick={() => handleClick(login)}
              >
                Log in
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
