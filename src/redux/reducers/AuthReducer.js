const initState = {
  authErr: null,
  signedIn: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("huree logged in");
      return {
        ...state,
        authErr: null,
        signedIn: true,
      };
    case "LOGIN_ERROR":
      console.log("nah! :( who a you ? ");
      return {
        ...state,

        authErr: "login failed",
      };
    case "SIGNOUT_SUCCESS":
      console.log("Off you go , shuu shuu");
      return {
        ...state,

        signedIn: false,
      };
    case "SIGNOUT_ERROR":
      console.log("why are you still here ?");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AuthReducer;
