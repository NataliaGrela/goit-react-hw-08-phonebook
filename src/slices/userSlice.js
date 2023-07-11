import { useNavigate } from 'react-router-dom';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useApiUrls } from 'api/useApiUrls';

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

export const logout = createAsyncThunk(
  'user/logout',
  async (user, thunkApi) => {
    const state = thunkApi.getState();
    const config = {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    };
    const { logOut } = useApiUrls();
    console.log(logOut);
    const response = await axios.post(logOut, config);

    return response.data;
    console.log(thunkApi);
  }
);

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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.currentUser = null;
        state.token = null;
      });
  },
});

export default slice.reducer;
