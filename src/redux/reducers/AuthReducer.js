const initState = {
  authErr: null,
  signedIn: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authErr: null,
        signedIn: true,
      };
    case "LOGIN_ERROR":
      console.log("log in error ");
      return {
        ...state,

        authErr: action.err.message,
      };
    case "SIGNOUT_SUCCESS":
      console.log("sign out success ");
      return {
        ...state,

        signedIn: false,
      };
    case "SIGNOUT_ERROR":
      console.log("sign out error");
      return {
        ...state,
      };
    case "SIGNUP_SUCCESS":
      console.log("sign up success");
      return {
        ...state,
        authErr: null,
      };
    case "SIGNUP_ERROR":
      console.log("sign up error");
      return {
        ...state,
        authErr: action.err.message,
       
      };
    default:
      return state;
  }
};

export default AuthReducer;
