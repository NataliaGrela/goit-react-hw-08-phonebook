import { logout } from 'slices/userSlice';

export const useApiUrls = () => {
  const baseUrl = 'https://connections-api.herokuapp.com';
  const signup = `${baseUrl}/users/signup`;
  const logIn = `${baseUrl}/users/login`;
  const logOut = `${baseUrl}/users/logout`;
  return {
    baseUrl,
    signup,
    logIn,
    logOut,
  };
};
