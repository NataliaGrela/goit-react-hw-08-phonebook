import { useRouting } from 'api/useRouting';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Contacts } from './Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const App = () => {
  const { login, register, contacts, baseUrl } = useRouting();

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={baseUrl} element={<Home></Home>}></Route>
          <Route path={register} element={<Register />}></Route>
          <Route
            path={contacts}
            element={
              <ProtectedRoute>
                <Contacts></Contacts>
              </ProtectedRoute>
            }
          ></Route>
          <Route path={login} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
