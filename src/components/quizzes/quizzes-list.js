import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
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
        // <div>
        //     <ul class="list-group">
        //         <li class="list-group-item d-flex justify-content-between align-items-center">
        //             Cras justo odio
        //             <span class="badge badge-primary badge-pill">14</span>
        //         </li>
        //         <li class="list-group-item d-flex justify-content-between align-items-center">
        //             Dapibus ac facilisis in
        //             <span class="badge badge-primary badge-pill">2</span>
        //         </li>
        //         <li class="list-group-item d-flex justify-content-between align-items-center">
        //             Morbi leo risus
        //             <span class="badge badge-primary badge-pill">1</span>
        //         </li>
        //     </ul>
        // </div>
    );
}

export default QuizzesList;