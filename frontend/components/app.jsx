import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

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

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />

      <IndexRoute component={QuestionIndexContainer} />
      <Route path="/questions/:questionId" component={QuestionShowContainer} />
    </Switch>
  </div>
);

export default App;
