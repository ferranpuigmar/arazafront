const getError = (status, message) => {
  return {
    type: "error",
    status,
    message,
  };
};

export default getError;
