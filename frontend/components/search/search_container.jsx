import { connect } from "react-redux";
import Search from "./search";
import { fetchSearchQuestion } from "../../actions/question_actions";

const mapStateToProps = state => {
  return {
    questions: Object.keys(state.questions).map(id => state.questions[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchQuestion: name => dispatch(fetchSearchQuestion(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
