import { connect } from "react-redux";
import AnswerShow from "./answer_show";
import {
  fetchAnswer,
  deleteAnswer,
  createAnswer
} from "../../actions/answer_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    answer: state.answers[ownProps.answerId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswer: id => dispatch(fetchAnswer(id)),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
    createAnswer: answer => dispatch(createAnswer(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerShow);
