import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AddClientReducer from "./AddClientReducer";

const rootReducer = combineReducers({
  form: formReducer,
  client : AddClientReducer
});

export default createStore(rootReducer);