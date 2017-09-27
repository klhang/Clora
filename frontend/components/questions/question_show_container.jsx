import { connect } from "react-redux";
import {
  fetchQuestions,
  fetchQuestion,
  updateQuestion,
  deleteQuestion
} from "../../actions/question_actions";
import QuestionShow from "./question_show";
import { createAnswer } from "../../actions/answer_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions[ownProps.match.params.questionId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionShow)
);
