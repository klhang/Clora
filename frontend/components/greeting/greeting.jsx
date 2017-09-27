import React from "react";
import { Link, withRouter } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>{" "}
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </hgroup>
    );
  }

  logoutAndRedirect() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    const { currentUser } = this.props;
    return currentUser
      ? this.personalGreeting(currentUser, this.logoutAndRedirect)
      : this.sessionLinks();
  }
}

export default withRouter(Greeting);
