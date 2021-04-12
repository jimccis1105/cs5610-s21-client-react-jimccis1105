const QUESTIONS_URL = "http://localhost:4000/api"

export const findAllQuestions = () =>
    fetch(`${QUESTIONS_URL}/questions`)
        .then(response => response.json())

export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUESTIONS_URL}/quizzes/${quizId}/questions`)
        .then(response => response.json());

export default {
    findAllQuestions, findQuestionsForQuiz
}