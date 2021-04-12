import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes)=>{
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div class="pt-3 pl-2">
            <ul className="nav">
                <div className='pr-3'>
                    <Link to={`/courses/table`}>
                        <i className="fas fa-arrow-left fa-2x"></i>
                    </Link>
                </div>
                <h2>Quizzes</h2>
            </ul>
            <ul class="list-group w-50">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button type="button" class="btn btn-primary">Start</button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;