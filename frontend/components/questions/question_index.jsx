import React from "react";
import QuestionIndexItem from "./question_index_item";
import NewQuestion from "./new_question";
import merge from "lodash/merge";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const questions = this.props.questions.map(question => {
      return <QuestionIndexItem key={question.id} question={question} />;
    });

    if (this.props.currentUser === null) {
      return <div />;
    }

    return (
      <div className="QuestionIndex">
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

        <ul>{questions}</ul>
      </div>
    );
  }
}

export default QuestionIndex;
