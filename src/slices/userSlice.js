import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useApiUrls } from 'api/useApiUrls';
import Notiflix from 'notiflix';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createUser = createAsyncThunk('user/create', async user => {
  const { signup } = useApiUrls();
  const response = await axios.post(signup, user);
  return response.data;
});

export const login = createAsyncThunk('user/login', async user => {
  const { logIn } = useApiUrls();
  const response = await axios.post(logIn, user);
  return response.data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  const { logOut } = useApiUrls();
  const response = await axios.post(logOut);
  return response.data;
});

const slice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    token: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        setAuthHeader(action.payload.token);
        Notiflix.Notify.success('Signup success');
      })
      .addCase(createUser.rejected, (state, action) => {
        Notiflix.Notify.failure('Sorry, there was an error. Please try again');
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        setAuthHeader(action.payload.token);
        Notiflix.Notify.success('Login success');
      })
      .addCase(login.rejected, (state, action) => {
        Notiflix.Notify.failure('Sorry, there was an error. Please try again');
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.currentUser = null;
        state.token = null;
        clearAuthHeader();
        Notiflix.Notify.success('Logout success');
      })
      .addCase(logout.rejected, (state, action) => {
        Notiflix.Notify.failure('Logout error');
      });
  },
});

export default slice.reducer;
