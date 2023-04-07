const userSignUpDataAction = (data) => {
    return {
      type: "NEW_USER_SIGNUP_DATA",
      payload: data,
    };
  };
  
  export default userSignUpDataAction;
  