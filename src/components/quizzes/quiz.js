import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom"
import Question from "./questions/question";

const Quiz = () => {
    const {quizId, courseId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

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
                            <li className='list-group-item'> 
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;