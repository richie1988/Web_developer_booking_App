// authUtils.js
export const setSessionToken = (token) => {
    localStorage.setItem('sessionToken', token);
  };
  
  export const removeSessionToken = () => {
    localStorage.removeItem('sessionToken');
  };