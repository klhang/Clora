import { connect } from "react-redux";

import { login, logout, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = formType === "login" ? login : signup;
  const loginDemoUser = login;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    loginDemoUser: user => dispatch(loginDemoUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
