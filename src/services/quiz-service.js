const QUIZZES_URL = "http://localhost:4000/api"

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}/questions`)
        .then(response => response.json());

export default {
    findAllQuizzes, findQuestionsForQuiz
}