import { combineReducers } from "redux";

// import entities from "./entities_reducer";
// import ui from "./ui_reducer";
import answers from "./answers_reducer";
import questions from "./questions_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import comments from "./comments_reducer";
import topics from "./topics_reducer";
import questionTopicLinks from "./question_topic_links_reducer";

const RootReducer = combineReducers({
  comments,
  session,
  questions,
  answers,
  errors,
  topics,
  questionTopicLinks
  // ui,
  // entities,
});

export default RootReducer;
