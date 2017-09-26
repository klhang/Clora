import React from "react";
import AnswerShow from "./answer_show";
import AnswerShowContainer from "./answer_show_container";

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswers();
  }

  render() {
    const questionId = this.props.questionId;
    const answers = this.props.answers.map(answer => {
      if (answer.question_id === questionId) {
        return <AnswerShowContainer key={answer.id} answerId={answer.id} />;
      }
    });

    return (
      <div>
        <ul>{answers}</ul>
      </div>
    );
  }
}

export default AnswerIndex;
