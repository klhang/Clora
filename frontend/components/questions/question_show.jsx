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
}
