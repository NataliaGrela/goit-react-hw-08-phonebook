import { Outlet, Link, useLocation } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { logout } from 'slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Layout = () => {
  const { login, register, contacts, baseUrl } = useRouting();
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const isActive = page => {
    return location.pathname.includes(page);
  };
  const handleLogOut = () => {
    console.log('ppp');
    dispatch(logout({}));
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="nav">
            <li>
              <Link
                className={!isActive('/') ? 'nav-el active' : 'nav-el'}
                to={`/`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={isActive('/') ? 'nav-el active' : 'nav-el'}
                to={register}
              >
                Register
              </Link>
            </li>
            <li>
              {currentUser ? (
                <button
                  onClick={handleLogOut}
                  className={isActive('/') ? 'nav-el active' : 'nav-el'}
                  to={login}
                >
                  Log out
                </button>
              ) : (
                <Link
                  className={isActive('/') ? 'nav-el active' : 'nav-el'}
                  to={login}
                >
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
