import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { fetchSearchQuestion } from "../../actions/question_actions";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchQuestion: name => dispatch(fetchSearchQuestion(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
