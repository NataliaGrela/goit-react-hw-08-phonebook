import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Login } from './Login/Login';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { Register } from './Register/Register';
import { Contacts } from './Contacts/Contacts';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFilter,
  fetchContacts,
  postContact,
  removeContact,
} from '../slice/phonebook';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';

const App = () => {
  const { login, register, contacts, baseUrl } = useRouting();

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            path={baseUrl}
            element={<Navigate to={`/${login}/`} />}
          ></Route>
          <Route path={register} element={<Register />}></Route>
          <Route path={contacts} element={<Contacts />}></Route>
          <Route path={login} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
