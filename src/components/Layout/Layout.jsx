import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearContacts } from 'slices/contactsSlice';
import { useEffect } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      dispatch(clearContacts());
    }
  }, [currentUser]);

  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
