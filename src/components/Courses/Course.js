import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { coursename, img,price } = props.course;

    
    return (
        <div className="row border-bottom px-5 py-5 ">
            <div className="col-md-3 ">
                <img className="img-thumbnail rounded mw-100" src={img} alt="" />
            </div>
            <div className="col-md-9 text-left">
                <h3 className="">{coursename}</h3>
                <p className="text-info">Price $: {price}</p>
                <button onClick={() => props.handleEnollNow(props.course)} className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;