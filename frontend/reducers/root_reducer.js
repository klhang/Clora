import { combineReducers } from "redux";

// import entities from "./entities_reducer";
// import ui from "./ui_reducer";
import answers from "./answers_reducer";
import questions from "./questions_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";

const RootReducer = combineReducers({
  // entities,
  session,
  questions,
  answers,
  // ui,
  errors
});

export default RootReducer;
