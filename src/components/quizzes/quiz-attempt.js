import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizAttempt = () => {
    const {courseId, quizId} = useParams()
    const [attempts, setAttempts] = useState([])
    useEffect(() => {
        quizService.findAttempts(quizId)
            .then(attempts=>{
                setAttempts(attempts)
                console.log(attempts)
            })
    }, [])
    return(
        <div class="pt-3 pl-2">
            <ul className="nav">
                <div className='pr-3'>
                    <Link to={`/courses/${courseId}/quizzes`}>
                        <i className="fas fa-arrow-left fa-2x"></i>
                    </Link>
                </div>
                <h2>Quiz Attempts</h2>
            </ul>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Attempt ID</th>
                    <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                {
                    attempts.map((attempt, key) =>
                        <tr>
                            <th scope="row">{key}</th>
                            <td>{attempt._id}</td>
                            <td>{attempt.score}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default QuizAttempt;