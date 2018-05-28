import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Redirect, Switch, HashRouter, IndexRoute } from "react-router";
import AuthForm from './auth_form';
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
  <div>
    <GreetingContainer />

    <AuthRoute path='/login' component={AuthForm}/>
    <AuthRoute path='/signup' component={AuthForm}/>






          <div className="container jumbotron">
            <div className="col-md-2 col-lg-2">
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

            <div className="col-md-8 col-lg-6">
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
