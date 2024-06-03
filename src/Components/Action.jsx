export const fetchUserData = (user) => ({
  type: " FETCH_USER_DATA",
  payload: user,
});
export const fetchUserError = (error) => ({
  type: "ERROR",
  payload: error,
});
