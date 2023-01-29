const makeDataForSending = (user, tokens) => {
  const dataForSending = {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    tokens,
  };
  return dataForSending;
};

export { makeDataForSending };
