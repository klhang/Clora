import React from "react";
import QuestionIndexItem from "./question_index_item";
import NewQuestion from "./new_question";
import merge from "lodash/merge";
import { ConditionalComponent } from "../../util/route_util";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.questions.length) {
      this.props.fetchQuestions();
    }
    this.props.fetchAnswers();
  }

  render() {
    const questions = this.props.questions.map(question => {
      return <QuestionIndexItem key={question.id} question={question} />;
    });

    return (
      <div className="QuestionIndex">
        <ConditionalComponent
          trueComponent={() => (
            <div className="QuestionIndexFormNew">
              <div className="QuestionIndexUserHeader">
                <a className="QuestionIndexUserName">
                  {this.props.currentUser.username}
                </a>
              </div>
              <NewQuestion
                createQuestion={this.props.createQuestion}
                currentUser={this.props.currentUser}
              />
            </div>
          )}
          falseComponent={() => <div />}
        />

        <ul>{questions}</ul>
      </div>
    );
  }
}

export default QuestionIndex;
