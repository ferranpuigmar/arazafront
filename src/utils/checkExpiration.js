export const defineExpirationTime = () => {
  const expirationDate = new Date();
  expirationDate.setSeconds(expirationDate.getSeconds() + 3600);
  return expirationDate.getTime();
};

export const isQueryDateExpired = (state) => {
  if (!state.queryExpiration) return true;
  const today = new Date();
  return today.getTime() > state.queryExpiration;
};
