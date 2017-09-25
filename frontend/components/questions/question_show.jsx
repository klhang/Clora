import React from "react";
import merge from "lodash/merge";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickOnEdit: false,
      question: this.props.question
    };
    this.handleQsEdit = this.handleQsEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.questionId);
  }

  componentWillReceiveProps(newProps) {
    let newState = merge({}, this.state, { question: newProps.question });
    this.setState(newState);
  }

  deleteQuestion() {
    return e => {
      this.props.deleteQuestion(this.props.question.id);
    };
  }
  handleQsEdit(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state.question);
    let newState = merge({}, this.state, { clickOnEdit: false });
    this.setState(newState);
  }

  update(field) {
    return e => {
      let newState = merge({}, this.state, {
        question: { [field]: e.target.value }
      });
      this.setState(newState);
    };
  }

  updateEditQuestionClicked(boolean) {
    return e => {
      let newState = merge({}, this.state, { clickOnEdit: boolean });
      this.setState(newState);
    };
  }

  showQuestion() {
    const { question } = this.props;

    if (this.state.clickOnEdit === false) {
      return (
        <div>
          <h1>{question.title}</h1>
          <p className="QuestionShowDetails">{question.description}</p>
        </div>
      );
    } else {
      return (
        <div className="EditQuestion">
          <input
            className="EditQuestionTitle"
            type="text"
            value={this.state.question.title}
            onChange={this.update("question")}
          />
          <textarea
            className="EditQuestionDetails"
            value={this.state.question.description}
            onChange={this.update("description")}
            placeholder="Enter question description.."
          />
          <div className="EditQuestionButtonBar">
            <button
              className="CancelButton"
              onClick={this.updateEditQuestionClicked(false)}
            >
              Cancel
            </button>
            <button className="EditQuestionSubmit" onClick={this.handleQsEdit}>
              Update
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div className="QuestionShowContainer">
        <div className="QuestionShowQuestion">{this.showQuestion()}</div>
      </div>
    );
  }
}

export default QuestionShow;
