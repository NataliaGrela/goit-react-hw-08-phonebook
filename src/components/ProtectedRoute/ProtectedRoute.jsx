import { Navigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector(state => state.user);
  const { login } = useRouting();
  if (!token) {
    return <Navigate to={`/${login}`}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
