
export const login = (username, password) => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
  };
  
  export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  