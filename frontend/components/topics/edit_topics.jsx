import React from "react";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";

class EditTopics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  handleClick(topicId) {
    return () => {
      this.props
        .fetchTopicQuestions(topicId)
        .then(() => this.props.history.push("/questions"));
    };
  }

  handleClickAllTopics() {
    return () => {
      this.props
        .fetchQuestions()
        .then(() => this.props.history.push("/questions"));
    };
  }
  render() {
    const topics = this.props.topics.map(topic => {
      return (
        <div className="row all-margin-10">
          <a className="black opacity-80 left-margin-10 ">
            <button className="font-size-13" onClick={this.handleClick(topic.id)}>{topic.name}</button>
          </a>
        </div>
      )
    });

    return (
      <div className ="all-margin-30">
             <div className='row bottom-padding-10 bottom-boader'>
                <span className="left-margin-10">Feeds</span>
             </div>
          {topics}
      </div>
    );
  }
}

export default withRouter(EditTopics);
