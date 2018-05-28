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
        <div className='form-group'>


            <textarea
              className="answer-editor"
              placeholder="Please create your answer here"
              onChange={this.updateAnswerField()}
              value={this.state.answer.text}
            />
          <button className="PerfectColdButton all-margin-10" onClick={this.handleAnswerSubmit}>
            <span>Submit</span>
          </button>
        </div>




      );
    } else {
      return <div />;
    }
  }
}

export default NewAnswer;
