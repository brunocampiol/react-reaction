import { combineReducers } from "redux";
import messageReducers from "./messages";
import usernameReducer from "./username";

export default combineReducers({
    messages: messageReducers,
    username: usernameReducer
})

//export default () => {};