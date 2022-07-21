import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SingleSubjectTasks from '../Single Subject Tasks/SingleSubjectTasks';

const SingleClassTasks = (props) => {

    let subjectNameCapital = props.subject;
    const { className } = props;
    const { batch } = props;
    const { group } = props;
    const myArray = subjectNameCapital.split(" ");
    let subjectName = '';
    for (let i = 0; i < myArray.length; i++) {
        subjectName += myArray[i];
    }

    const navigate = useNavigate();
    const goTo = (path) => {
        // console.log(path);
        navigate(path);
    }

    return (
        <div>
            <div className='card-sub border-0 mb-3'>
                <img src='https://images5.alphacoders.com/585/thumbbig-585645.webp' class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title text-white text-start">{subjectNameCapital.toUpperCase()}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => goTo(`/subjectTasks/${className}/${batch}/${group}/${subjectName}`)} className='mb-3 button-87'>All Videos Of {subjectNameCapital}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SingleClassTasks;