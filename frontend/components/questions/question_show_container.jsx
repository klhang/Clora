import { connect } from "react-redux";
import {
  fetchQuestions,
  fetchQuestion,
  updateQuestion,
  deleteQuestion
} from "../../actions/question_actions";
import QuestionShow from "./question_show";

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions[ownProps.params.questionId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
