import React from "react";
import { Link, withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { ConditionalComponent } from "../../util/route_util";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.state = {
      text: ""
    };
    this.update = this.update.bind(this);
  }

  sessionLinks() {
    return (
      <div>
        <Link className="uone-half column" to="/login">
          Try
        </Link>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
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
      <hgroup>
        {search_input}
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
    return (
      <div className="one-half column">

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

// const search_input = (
//   <form onSubmit={this.handleSearch.bind(this)}>
//     <input
//       onChange={this.update("text")}
//       value={this.state.text}
//       type="text"
//       placeholder="Search Questions"
//       />
//     <button>Search</button>
//   </form>
// );
