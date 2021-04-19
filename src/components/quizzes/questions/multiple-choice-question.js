import React, {useState, useEffect} from "react";

const MultipleChoiceQuestion = ({question, attempt, setAttempt, submitted}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    // const [correctAnswer, setCorrectAnswer] = useState("")
    useEffect(() => {
        const excludeCurrQuestion = attempt.filter(q => q._id !== question._id)
        question.answer = yourAnswer
        setAttempt([...excludeCurrQuestion, question])
     }, [yourAnswer]);
    return(
        <div>
            <h5>
                {question.question}
                {
                    submitted && question.correct === yourAnswer &&
                    <i className="fas fa-check pl-2" style={{color:'green'}}></i>
                }
                {
                    submitted && question.correct !== yourAnswer && 
                    <i className="fas fa-times pl-2" style={{color:'red'}}></i>
                }
            </h5>
            <ul className="list-group w-50">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${submitted && question.correct === choice? 'list-group-item-success':''}
                            ${submitted && yourAnswer === choice && question.correct != choice? 'list-group-item-danger':''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}
                                    disabled={submitted}/> {choice} </label>
                                {submitted && question.correct === choice? 
                                    <i className="fas fa-check"></i>: ''
                                }
                                {submitted && yourAnswer === choice && question.correct != choice? 
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
            {/* <button onClick={()=>{setCorrectAnswer(yourAnswer)}} type="button" class="btn btn-success">Grade</button> */}
            <p></p>
        </div>
    )
}

export default MultipleChoiceQuestion