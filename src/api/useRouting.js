// export const useEndPoints = () => {
//   const endPointCastCredits = movieId => {
//     const endPointCredits = `/movie/${movieId}/credits`;
//     return endPointCredits;
//   }; //cast

export const useRouting = () => {
  const baseUrl = 'goit-react-hw-08-phonebook';
  const login = `${baseUrl}/login`;
  const register = `${baseUrl}/register`;
  const contacts = `${baseUrl}/contacts`;
  return {
    baseUrl,
    login,
    register,
    contacts,
  };
};
