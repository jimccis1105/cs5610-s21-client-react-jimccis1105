import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, attempt, setAttempt, submitted}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question} attempt={attempt} setAttempt={setAttempt}
                                   submitted={submitted}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question} attempt={attempt} setAttempt={setAttempt}
                                        submitted={submitted}/>
            }
        </div>
    )
}

export default Question