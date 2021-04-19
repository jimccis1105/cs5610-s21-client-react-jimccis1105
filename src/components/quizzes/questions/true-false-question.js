import React, {useState, useEffect} from "react";

const TrueFalseQuestion = ({question, attempt, setAttempt, submitted}) => {
    const [yourAnswer, setYourAnswer] = useState('')
    // const [correctAnswer, setCorrectAnswer] = useState('')
    useEffect(() => {
        const excludeCurrQuestion = attempt.filter(q => q._id !== question._id)
        question.answer = yourAnswer
        setAttempt([...excludeCurrQuestion, question])
     }, [yourAnswer]);
    return(
        <div>
            <h4>
                {question.question}
                {
                    submitted && yourAnswer == question.correct && 
                    <i className="fas fa-check pl-2" style={{color:'green'}}></i>
                }
                {
                    submitted && yourAnswer != question.correct &&
                    <i className="fas fa-times pl-2" style={{color:'red'}}></i>
                }
            </h4>
            <ul className="list-group w-50">
                <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${submitted && yourAnswer === 'true' && question.correct === 'true'? 'list-group-item-success':''}
                            ${submitted && yourAnswer === 'true' && question.correct === 'false'? 'list-group-item-danger':''}
                            ${submitted && question.correct === 'true'? 'list-group-item-success':''}`}>
                    <label><input onClick={() => {setYourAnswer('true')}} type="radio" name={question._id} disabled={submitted}/> True</label>
                    {submitted && yourAnswer === 'true' && question.correct === 'true'?
                        <i className="fas fa-check"></i> : ''
                    }
                    {submitted && yourAnswer === 'true' && question.correct != 'true'?
                        <i className="fas fa-times"></i> : ''
                    }
                    {submitted && yourAnswer != 'true' && question.correct === 'true'?
                        <i className="fas fa-check"></i> : ''
                    }
                </li> 
                <li className={`list-group-item d-flex justify-content-between align-items-center
                            ${submitted && yourAnswer === 'false' && question.correct === 'false'? 'list-group-item-success':''}
                            ${submitted && yourAnswer === 'false' && question.correct === 'true'? 'list-group-item-danger':''}
                            ${submitted && question.correct === 'false'? 'list-group-item-success':''}`}>
                    <label><input onClick={() => {setYourAnswer('false')}} type="radio" name={question._id} disabled={submitted}/> False</label>
                    {submitted && yourAnswer === 'false' && question.correct === 'false'?
                        <i className="fas fa-check"></i> : ''
                    }
                    {submitted && yourAnswer === 'false' && question.correct === 'true'?
                        <i className="fas fa-times"></i> : ''
                    }
                    {submitted && yourAnswer != 'false' && question.correct === 'false'?
                        <i className="fas fa-check"></i> : ''
                    }
                </li>
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            {/* <button onClick={()=>{setCorrectAnswer(yourAnswer)}} type="button" class="btn btn-success">Grade</button> */}
        </div>
    )
}

export default TrueFalseQuestion