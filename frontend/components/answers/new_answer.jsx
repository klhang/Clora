import React from "react";
import merge from "lodash/merge";

class NewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: {
        text: "",
        author_id: this.props.currentUser.id,
        question_id: this.props.questionId
      }
    };
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(e) {
    e.preventDefault();
    this.props.createAnswer(this.state.answer).then(() => {
      let newState = merge({}, this.state, { answer: { text: "" } });
      this.setState(newState);
    });
  }

  updateAnswerField() {
    return e => {
      let newState = merge({}, this.state, {
        answer: { text: e.target.value }
      });
      this.setState(newState);
    };
  }

  render() {
    if (this.props.answerClicked === true) {
      return (
        <div className="NewAnswer">
          <a className="NewAnswerUserName">{this.props.currentUser.username}</a>
          <textarea
            className="NewAnswerText"
            placeholder="Please create your answer here"
            onChange={this.updateAnswerField()}
            value={this.state.answer.text}
          />
          <div className="NewAnswerButtonBar">
            <button
              className="SubmitNewAnswerButton"
              onClick={this.handleAnswerSubmit}
            >
              Submit Answer
            </button>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default NewAnswer;
