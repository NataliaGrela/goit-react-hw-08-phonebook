export const useApiUrls = () => {
  const baseUrl = 'https://connections-api.herokuapp.com';
  const signup = `${baseUrl}/users/signup`;
  const logIn = `${baseUrl}/users/login`;
  const logOut = `${baseUrl}/users/logout`;
  const contacts = `${baseUrl}/contacts`;
  return {
    baseUrl,
    signup,
    logIn,
    logOut,
    contacts,
  };
};
