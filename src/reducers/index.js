import { combineReducers } from "redux";
import messageReducers from "./messages";

export default combineReducers({
    messages: messageReducers
})

//export default () => {};