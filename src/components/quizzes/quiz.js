import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";

const Quiz = () => {
    const {quizId} = useParams()
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
            <h3>Quiz {quizId[0]}</h3>
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