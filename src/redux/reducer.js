const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          user: action.payload.user,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default reducer;
  