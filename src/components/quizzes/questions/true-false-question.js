import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    // const [answerTrue, setAnswerTrue] = useState("")
    // const [answerFalse, setAnswerFalse] = useState("")
    return(
        <div>
            {/* <h5>{question.question}</h5> */}
            <h4>
                {question.question}
                {
                    correctAnswer == question.correct &&
                    <i className="fas fa-check pl-2" style={{color:'green'}}></i>
                }
                {
                    correctAnswer != '' && correctAnswer != question.correct &&
                    <i className="fas fa-times pl-2" style={{color:'red'}}></i>
                }
            </h4>
            <ul className="list-group w-50">
                <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${correctAnswer != '' && question.correct === 'true'? 'list-group-item-success':''}
                            ${correctAnswer === 'true' && correctAnswer != '' && question.correct != 'true'? 'list-group-item-danger':''}`}>
                    <label><input onClick={() => {setYourAnswer('true')}} type="radio" name={question._id} disabled={`${correctAnswer != "" ? true: ''}`}/> True</label>
                    {correctAnswer != '' && question.correct === 'true'?
                        <i className="fas fa-check"></i> : ''
                    }
                    {correctAnswer === 'true' && correctAnswer != '' && question.correct != 'true'?
                        <i className="fas fa-times"></i> : ''
                    }
                </li> 
                <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${correctAnswer != '' && question.correct === 'false'? 'list-group-item-success':''}
                            ${correctAnswer === 'false' && correctAnswer != '' && question.correct != 'false'? 'list-group-item-danger':''}`}>
                    <label><input onClick={() => {setYourAnswer('false')}} type="radio" name={question._id} disabled={`${correctAnswer != "" ? true: ''}`}/> False</label>
                    {correctAnswer != '' && question.correct === 'false'?
                        <i className="fas fa-check"></i> : ''
                    }
                    {correctAnswer === 'false' && correctAnswer != '' && question.correct != 'false'?
                        <i className="fas fa-times"></i> : ''
                    }
                </li>
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button onClick={()=>{setCorrectAnswer(yourAnswer)}} type="button" class="btn btn-success">Grade</button>
            {/* <hr/> */}
        </div>
    )
}

export default TrueFalseQuestion