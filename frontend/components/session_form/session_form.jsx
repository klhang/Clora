import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
    }
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const demoUser = {
      username: "Guest",
      password: "password"
    };
    this.props.loginDemoUser({ user: demoUser });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Clora!
          <br />
          <div className="nav_links">
            Please {this.props.formType} or {this.navLink()}
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </div>
          <button onClick={this.handleDemoLogin}>Demo</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
