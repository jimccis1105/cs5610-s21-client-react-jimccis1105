const QUESTIONS_URL = "http://localhost:4000/api"

export const findAllQuestions = () =>
    fetch(`${QUESTIONS_URL}/questions`)
        .then(response => response.json())

export const findQuestionsForQuiz = (quizeId) =>
    fetch(`${QUESTIONS_URL}/quizzes/${quizeId}/questions`)
        .then(response => response.json());

export default {
    findAllQuestions, findQuestionsForQuiz
}