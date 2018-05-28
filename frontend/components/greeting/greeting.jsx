import React from "react";
import { Link, withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { ConditionalComponent } from "../../util/route_util";
import Footer from '.././footer';
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
      <div className='loginbackground'>
        <div className="top-margin-80">
          <div className="centered">
            <div className='centered'>
              <div className='logo centered top-margin-30'>
                <a className="navbar-brand brand " href="#">
                  <p className='brand'>Clora</p>
                </a>
              </div>
            </div>
            <br/>
            <div className="centered slogan col-xs-12">
              <div>
                <div className='centered'>
                <div className="centered slogan col-xs-12">
                  <div>
                    <h4>
                      <p>Curiosity is the essence of human existence. 'Who are we? Where are we? Where do we come from? Where are we going?'... I don't know. I don't have any answers to those questions. I don't know what's over there around the corner. But I want to find out.
      ---Eugene Cernan
                      <br/>
                      <br/>
                    </h4>
                  </div>
                </div>
                </div>
                <h4>
                  <div>
                    <Link to="/login">
                      Continue
                    </Link>
                  </div>
                  <br/>
                  <br/>
                </h4>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }



  personalGreeting(currentUser, logout) {

    return (
      <div className='col-lg-offset-4'>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand brand-sm" href="#">
                <span className='brand-sm'>Clora</span>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <form className="navbar-form navbar-left dropdown" onSubmit={this.handleSearch.bind(this)}>
                <div className="form-group">
                  <input
                    className="form-control dropdown-toggle right-margin-10"
                    onChange={this.update("text")}
                    value={this.state.text}
                    type="text"
                    placeholder="Search Questions"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-default"
                  >Search</button>
              </form>
              <ul className="nav navbar-nav navbar-right">

                      <li className="dropdown">
                          <a href="#" onClick={logout}>{currentUser.username}Logout</a>
                      </li>
              </ul>
        </div>
      </div>
    </nav>
  </div>




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
      <div>
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
