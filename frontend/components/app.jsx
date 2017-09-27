import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Redirect, Switch, HashRouter, IndexRoute } from "react-router";

import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import QuestionIndexContainer from "./questions/question_index_container";
import QuestionShowContainer from "./questions/question_show_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Come Ask on Clora</h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    <div id="main-page">
      <Switch>
        <Route
          exact
          path="/questions/:questionId"
          component={QuestionShowContainer}
        />
        <Route component={QuestionIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
