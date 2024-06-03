import { useState } from "react";
import * as thunk from "redux-thunk";
import Reducer from "./Reducer";
import { createStore, applyMiddleware } from "redux";
import { fetchUserData, fetchUserError } from "./Action";
const store = createStore(Reducer, applyMiddleware(thunk));
const [showData, setShowData] = useState(false);
const [data, setData] = useState([]);
const axiosFetchData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => store.dispatch(fetchUserData(res.data)))
    .catch((err) => store.dispatch(fetchUserError(err)));
};
const UserList = () => {
  useEffect(() => {
    return store.subscribe(() => setData(store.getState().user));
  }, []);
  handleClick = () => {
    store.dispatch(axiosFetchData());
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={handleClick}>click hear</button>
      <ul>
        {showData && (
          <div>
            {data.map((item) => (
              <li>
                <h3>{item.name}</h3>
                <h3>{item.email}</h3>
                <hr />
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default UserList;
