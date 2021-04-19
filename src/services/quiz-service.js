const QUIZZES_URL = "https://stormy-dawn-11171.herokuapp.com/api"

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

export const findQuizById = (quizId) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}`).then(response => response.json())

export const submitQuiz = (quizId, questions) => 
    fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

export const findAttempts = (quizId) => 
  fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`).then(response => response.json())


export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttempts
}