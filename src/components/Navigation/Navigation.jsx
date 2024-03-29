import { useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { logout } from 'slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { login, register, baseUrl, contacts: contactsUrl } = useRouting();
  const { currentUser } = useSelector(state => state.user);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout({}));
    navigate(baseUrl);
  };
  const handleClick = to => {
    navigate(to);
  };

  return (
    <Container maxWidth="sm">
      <header>
        <nav
          className={`${css.navigation} ${
            !currentUser && css.navigationCenter
          }`}
        >
          <ul className={css.list}>
            <li>
              <Button onClick={() => handleClick(baseUrl)}>Home</Button>
            </li>
            {!contacts && (
              <li>
                <Button onClick={() => handleClick(register)}>Register</Button>
              </li>
            )}

            <li>
              {currentUser ? (
                <Button onClick={handleLogOut} to={login}>
                  Log out
                </Button>
              ) : (
                <Button onClick={() => handleClick(login)}>Log in</Button>
              )}
            </li>
            <li>
              {currentUser ? (
                <Button onClick={() => handleClick(contactsUrl)}>
                  Contacts
                </Button>
              ) : null}
            </li>
          </ul>
          {currentUser && <UserMenu></UserMenu>}
        </nav>
      </header>
    </Container>
  );
};
