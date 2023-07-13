import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className={css.userContainer}>
      <AccountCircleIcon fontSize="inherit" />

      <span className={css.userName}>{currentUser.name}</span>
    </div>
  );
};
