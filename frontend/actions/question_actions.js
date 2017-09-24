import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const fetchAllQuestions = () => dispatch =>
  APIUtil.fetchAllQuestions().then(questions =>
    dispatch(receiveAllQuestions(questions))
  );

export const fetchQuestion = id => dispatch =>
  APIUtil.fetchQuestion(id).then(question =>
    dispatch(receiveQuestion(question))
  );

export const createQuestion = question => dispatch =>
  APIUtil.createQuestion(question).then(newQuestion =>
    dispatch(receiveQuestion(newQuestion))
  );

export const updateQuestion = question => dispatch =>
  APIUtil.updateQuestion(question).then(updatedQuestion => {
    dispatch(receiveQuestion(updatedQuestion));
  });

export const deleteQuestion = id => dispatch =>
  APIUtil.deleteQuestion(id).then(question =>
    dispatch(removeQuestion(question))
  );
