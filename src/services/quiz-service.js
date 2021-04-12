const QUIZZES_URL = "http://localhost:4000/api"

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

export const findQuizById = (quizId) =>
    fetch(`${QUIZZES_URL}/quizzes/${quizId}`).then(response => response.json())

export default {
    findAllQuizzes, findQuizById
}