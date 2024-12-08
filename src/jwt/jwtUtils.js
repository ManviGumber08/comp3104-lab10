const jwtUtils = {
    generateToken: (username) => {
      const token = btoa(username + ":token"); // A simple token simulation
      return token;
    },
  };
  
  export default jwtUtils;
  