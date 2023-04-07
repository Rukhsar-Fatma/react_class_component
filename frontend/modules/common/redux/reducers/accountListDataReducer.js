const accountListDataReducer = (data = {}, action) => {
  if (action.type === "ACCOUNT_LIST_DATA") {
    return action.payload;
  }
  return data;
};

export default accountListDataReducer;
