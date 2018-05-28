import React from "react";
import { Link } from "react-router-dom";
import AnswerShowContainer from "../answers/answer_show_container";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: null };
  }

  componentDidMount() {
    this.setAnswerIndex();
  }

  setAnswerIndex() {
    if (this.state.index === null) {
      let index1 = Math.floor(
        Math.random() * this.props.question.answers.length
      );
      this.setState({ index: index1 });
    }
  }

  render() {
    // console.log("question index item", this.props);
    const question = this.props.question;

    let answer = question.answers[this.state.index];

    if (!answer) {
      return (
        <div className='container well'>
          <div className="row all-margin-10">
          <Link className="black bold" to={`/questions/${question.id}`}>
            <span className="left-margin-10">{"    " + question.title}</span>
          </Link>
          </div>
        </div>
      );
    }

    return (
      <div className='container well'>
        <div className="row all-margin-10">
          <Link className="black bold" to={`/questions/${question.id}`}>
            <span className="left-margin-10">{question.title}</span>
          </Link>

          <ul>
            <AnswerShowContainer answerId={answer.id} />
          </ul>
      </div>
    </div>
    );
  }
}

export default QuestionIndexItem;
