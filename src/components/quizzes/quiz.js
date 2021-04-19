import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"
const Quiz = () => {
    const {quizId, courseId} = useParams()
    const [questions, setQuestions] = useState([])
    const [attempt, setAttempt] = useState([])
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions)=>{
                setQuestions(questions)
                setAttempt(questions)
            })
    }, [])
    const submitQuiz = () => {
        quizService.submitQuiz(quizId, attempt)
            .then((attempt =>{
                setAttempt(attempt)
                setSubmitted(true)
            }))
    }
    return(
        <div className='pl-3'>
            <ul className="nav">
                <div className='pr-3'>
                    <Link to={`/courses/${courseId}/quizzes/`}>
                        <i className="fas fa-arrow-left fa-2x"></i>
                    </Link>
                </div>
                <h3>Quiz {quizId[0]}</h3>
            </ul>
            <ul className='list-group w-50'>
                {
                    questions.map((question) => {
                        return(
                            <li key={question._id} className='list-group-item'> 
                                <Question question={question} attempt={attempt} setAttempt={setAttempt}
                                          submitted={submitted}/>
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <div class='row pl-3'>
                <button onClick={submitQuiz} type="button" class="btn btn-success" disabled={submitted}>Submit Quiz</button>
                    {
                        submitted &&
                        <div class='row'>
                            <p class='pl-5'>
                                Your attempt ID: {attempt._id}
                            </p>
                            <div class='pl-4 pt-0'>
                                <Link className='btn btn-secondary'
                                            to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>See Attempts</Link>
                            </div>
                        </div>
                    }
            </div>
        </div>
    )
}

export default Quiz;