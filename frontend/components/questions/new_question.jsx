import React from "react";
import merge from "lodash/merge";

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.submitNewQuestion = this.submitNewQuestion.bind(this);
    this.state = {
      newQuestionClicked: false,
      question: {
        question: "",
        details: "",
        author_id: this.props.currentUser.id
      }
    };
  }

  updateNewQuestionClicked(boolean) {
    return e => this.setState({ newQuestionClicked: boolean });
  }

  updateQuestionField() {
    return e => {
      let newState = merge({}, this.state, {
        question: { question: e.target.value }
      });
      this.setState(newState);
    };
  }

  submitNewQuestion(e) {
    e.preventDefault();
    const question = this.state.question;
    this.props.createQuestion(question).then(newQuestion => {
      let newState = merge({}, this.state, {
        question: { question: "" },
        newQuestionClicked: false
      });
      this.setState(newState);
    });
  }

  render() {
    if (this.state.newQuestionClicked === false) {
      return (
        <a
          className="NewQuestionLink"
          onClick={this.updateNewQuestionClicked(true)}
        >
          This is the begining of your question.
        </a>
      );
    } else {
      return (
        <div className="NewQuestionContainer">
          <div className="NewQuestionContaining">
            <div className="NewQuestionBox">
              <div className="NewQuestionBody">
                <span className="QuestionIndexUserName">
                  <a>{this.props.currentUser.username}</a> asks
                </span>
                <textarea
                  className="NewQuestionInput"
                  placeholder="This is the begining of your question."
                  onChange={this.updateQuestionField()}
                  value={this.state.question.question}
                />
              </div>
              <div className="NewQuestionButtonBar">
                <button
                  className="CancelButton"
                  onClick={this.updateNewQuestionClicked(false)}
                >
                  Cancel
                </button>
                <button
                  className="NewQuestionButton"
                  onClick={this.submitNewQuestion}
                >
                  Ask Question
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NewQuestion;