import { connect } from "react-redux";
import EditTopics from "./edit_topics";
import { fetchTopics } from "../../actions/topic_actions";
import {
  createQuestionTopicLink,
  deleteQuestionTopicLink
} from "../../actions/question_topic_link_actions";
import {
  fetchQuestions,
  fetchTopicQuestions
} from "../../actions/question_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    topics: Object.keys(state.topics).map(id => state.topics[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
    createQuestionTopicLink: questionTopicLink =>
      dispatch(createQuestionTopicLink(questionTopicLink)),
    deleteQuestionTopicLink: id => dispatch(deleteQuestionTopicLink(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchTopicQuestions: topicId => dispatch(fetchTopicQuestions(topicId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTopics);
