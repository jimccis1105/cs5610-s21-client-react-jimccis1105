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
                    <i className="fas fa-check" style={{color:'green'}}></i>
                }
                {
                    correctAnswer != '' && correctAnswer != question.correct &&
                    <i className="fas fa-times" style={{color:'red'}}></i>
                }
            </h4>
            <ul className="list-group w-50">
                <li className={`list-group-item
                            ${correctAnswer != '' && question.correct === 'true'? 'list-group-item-success':''}
                            ${correctAnswer === 'true' && correctAnswer != '' && question.correct != 'true'? 'list-group-item-danger':''}`}>
                    <label><input onClick={() => {setYourAnswer('true')}} type="radio" name={question._id}/> True</label>
                </li>
                <li className={`list-group-item
                            ${correctAnswer != '' && question.correct === 'false'? 'list-group-item-success':''}
                            ${correctAnswer === 'false' && correctAnswer != '' && question.correct != 'false'? 'list-group-item-danger':''}`}>
                    <label><input onClick={() => {setYourAnswer('false')}} type="radio" name={question._id}/> False</label>
                </li>
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button onClick={()=>{setCorrectAnswer(yourAnswer)}} type="button" class="btn btn-success">Grade</button>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion