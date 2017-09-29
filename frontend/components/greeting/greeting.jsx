import React from "react";
import { Link, withRouter } from "react-router-dom";
import merge from "lodash/merge";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.state = {
      text: ""
    };
  }

  sessionLinks() {
    return (
      <nav className="one-half column right-align-text">
        <Link className="u-pull-right" to="/login">
          Login
        </Link>
        &nbsp;or&nbsp;
        <Link className="u-pull-right" to="/signup">
          Sign up!
        </Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <hgroup className="one-half column right-align-text">
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

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSearch(e) {
    e.preventDefault();
    // this.props
    //   .fetchSearchQuestion(this.state.text)
    //   .then(() => this.props.history.push(`/search`));
    this.props.fetchSearchQuestion(this.state.text).then(() => {
      let newState = merge({}, this.state, {
        text: ""
      });
      this.setState(newState);
      this.props.history.push(`/questions`);
    });
  }

  render() {
    const { currentUser } = this.props;
    const search_input = (
      <form onSubmit={this.handleSearch.bind(this)}>
        <input
          onChange={this.update("text")}
          value={this.state.text}
          type="text"
          placeholder="Search Questions"
        />
        <button>Search</button>
      </form>
    );
    return (
      <div>
        {search_input}
        {currentUser ? (
          this.personalGreeting(currentUser, this.logoutAndRedirect)
        ) : (
          this.sessionLinks()
        )}
      </div>
    );
  }
}

export default withRouter(Greeting);
