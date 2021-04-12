import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === correctAnswer &&
                    <i className="fas fa-check pl-2" style={{color:'green'}}></i>
                }
                {
                    correctAnswer !== "" && question.correct !== correctAnswer && 
                    <i className="fas fa-times pl-2" style={{color:'red'}}></i>
                }
            </h5>
            <ul className="list-group w-50">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${correctAnswer != '' && question.correct === choice? 'list-group-item-success':''}
                            ${correctAnswer === choice && correctAnswer != '' && question.correct != choice? 'list-group-item-danger':''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}
                                    disabled={`${correctAnswer != "" ? true: ''}`}/> {choice} </label>
                                {correctAnswer != '' && question.correct === choice? 
                                    <i className="fas fa-check"></i>: ''
                                }
                                {correctAnswer === choice && correctAnswer != '' && question.correct != choice? 
                                    <i className="fas fa-times"></i>: ''
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button onClick={()=>{setCorrectAnswer(yourAnswer)}} type="button" class="btn btn-success">Grade</button>
            {/* <p>{question.correct}</p> */}
            <p></p>
            {/* <p>{question.type}</p> */}
        </div>
    )
}

export default MultipleChoiceQuestion