export const fetchAllQuestions = () => {
  return $.ajax({
    type: "GET",
    url: `/api/questions`
  });
};

export const fetchQuestion = id => {
  return $.ajax({
    type: "GET",
    url: `/api/questions/${id}`
  });
};

export const createQuestion = question => {
  return $.ajax({
    type: "POST",
    url: `/api/questions`,
    data: { question }
  });
};

export const updateQuestion = question => {
  return $.ajax({
    type: "PATCH",
    url: `/api/questions/${question.id}`,
    data: { question }
  });
};

export const deleteQuestion = id => {
  return $.ajax({
    type: "DELETE",
    url: `/api/questions/${id}`
  });
};
