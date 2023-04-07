const accountListData = (data) => {
  console.log('data in redux', data);
  return {
    type: "ACCOUNT_LIST_DATA",
    payload: data,
  };
};

export default accountListData;
