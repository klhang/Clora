import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Redirect, Switch, HashRouter, IndexRoute } from "react-router";

import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import {
  AuthRoute,
  ProtectedRoute,
  ConditionalComponent
} from "../util/route_util";

import QuestionIndexContainer from "./questions/question_index_container";
import QuestionShowContainer from "./questions/question_show_container";
import EditTopicsContainer from "./topics/edit_topics_container";

const App = () => (
  <div className="container">
    <header className="row">
      <Link to="/" className="one-half column">
        <h1>Come Ask on Clora</h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    <div className="row">
      <div className="three columns">
        <Route
          path="/"
          component={() => (
            <ConditionalComponent
              trueComponent={EditTopicsContainer}
              falseComponent={() => <div />}
            />
          )}
        />
      </div>

      <div className="nine columns">
        <Route
          exact
          path="/"
          component={() => (
            <ConditionalComponent
              trueComponent={QuestionIndexContainer}
              falseComponent={() => <div />}
            />
          )}
        />

        <Switch>
          <Route
            exact
            path="/questions/:questionId"
            component={QuestionShowContainer}
          />
          <Route path="/questions" component={QuestionIndexContainer} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
