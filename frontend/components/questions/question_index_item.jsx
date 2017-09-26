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
        <li className="QuestionItem">
          <Link to={`/questions/${question.id}`}>
            <h2 className="QuestionItemQuestion">{question.title}</h2>
          </Link>
        </li>
      );
    }

    return (
      <li className="QuestionItem">
        <Link to={`/questions/${question.id}`}>
          <h2 className="QuestionItemQuestion">{question.title}</h2>
        </Link>
        <ul>
          <AnswerShowContainer answerId={answer.id} />
        </ul>
      </li>
    );
  }
}

export default QuestionIndexItem;
