import { fetchUserData, fetchUserError } from "./Action";
const initialState = {
  user: [],
  error: "",
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchUserData:
      return {
        user: action.payload,
        error: "",
      };
    case fetchUserError:
      return {
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
