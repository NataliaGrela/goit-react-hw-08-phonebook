import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contacts from 'slices/contactsSlice';
import user from 'slices/userSlice';

const reducer = combineReducers({
  user,
  contacts,
});

export const store = configureStore({
  reducer,
});
