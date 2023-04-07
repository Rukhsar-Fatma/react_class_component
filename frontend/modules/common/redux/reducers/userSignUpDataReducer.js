const userSignUpDataReducer = (SignUpData = {}, action) => {
    if (action.type === "NEW_USER_SIGNUP_DATA") {
      return action.payload;
    }
    return SignUpData;
  };
  
  export default userSignUpDataReducer;
  