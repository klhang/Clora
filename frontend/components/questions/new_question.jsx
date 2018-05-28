import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap-modal';
import merge from "lodash/merge";
// import { hashHistory } from "react-router";

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.submitNewQuestion = this.submitNewQuestion.bind(this);
    this.state = {
      newQuestionClicked: false,
      question: {
        title: "",
        description: "",
          showModal: false,
        author_id: this.props.currentUser.id
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount(){
    this.setState({showModal: false})
  }
  updateNewQuestionClicked(boolean) {
    return e => this.setState({ newQuestionClicked: boolean });
  }

  updateQuestionField() {
    return e => {
      let newState = merge({}, this.state, {
        question: { title: e.target.value }
      });
      this.setState(newState);
    };
  }

  submitNewQuestion(e) {
    e.preventDefault();
    const question = this.state.question;
    this.props.createQuestion(question).then(newQuestion => {
      let newState = merge({}, this.state, {
        question: { title: "" },
        newQuestionClicked: false,
        showModal:false
      });
      this.setState(newState);
      // hashHistory.push(`/questions/${newQuestion.question.id}`);
    });
  }

  close(){
  this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  render() {

      return (
        <div className='container well'>


          <div>
            <a className="askquestion grey font-size-18 bold"
              onClick={this.open}>
            What is your question?
            </a>

            <Modal id="askQuestionModal" show={this.state.showModal} onHide={this.close} >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <span>
                  <div className="user grey">{this.props.currentUser.username}</div>
                </span>

                <div>
                  <input type="text" onChange={this.updateQuestionField()} value={this.state.question.title}
                    className="askquestion font-size-18 bold no-border top-margin-10"
                    placeholder='I want to know...'/>
                </div>

              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="PerfectColdButton" onClick={this.submitNewQuestion}>Ask Question</button>
              </Modal.Footer>

              </Modal>

            </div>
          </div>
      );
    }

}

export default NewQuestion;
