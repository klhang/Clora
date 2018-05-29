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
      <div className='login'>
        <div className='col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-0 col-lg-3'>

          <form onSubmit={this.handleSubmit} className="login-form-box row" style={{marginLeft: '200px',marginRight:'-200px',paddingRight: '15px'}}>
            {this.renderErrors()}
            <div className='form-group '>
              <h4 >
                <b>
                  <div className="nav_links">
                    Please {this.props.formType} or {this.navLink()}
                  </div>
                </b>
              </h4>

              <input id='email' className='form-control' placeholder='Username' value={this.state.username} onChange={this.update('username')}/>
            </div>

            <div className='form-group'>
              <span ></span>
              <input id='password' type='password' className='form-control' value={this.state.password} onChange={this.update('password')} placeholder='Password'/>

            </div>
            <input type="submit" value="Submit" className='btn wonderful-button pull-right'></input>

          </form>
          <form onSubmit={this.handleDemoLogin} className="login-form-box row demo-login " style={{marginLeft: '200px',marginRight:'-200px',paddingRight: '15px'}}>
            <input type="submit" value="Demo Sign In" className='btn wonderful-button pull-right' ></input>
          </form>

      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
