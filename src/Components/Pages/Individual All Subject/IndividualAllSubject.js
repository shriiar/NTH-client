
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IndividualAllSubject.css';

const IndividualAllSubject = (props) => {

    let subjectNameCapital = props.subject;
    const myArray = subjectNameCapital.split(" ");
    let subjectName = '';
    for (let i = 0; i < myArray.length; i++) {
        subjectName += myArray[i];
    }

    const navigate = useNavigate();
    const goTo = (path) => {
        console.log(path);
        navigate(path);
    }

    return (
        <div>
            <div className='card border-0 mb-3'>
                <img src='https://images5.alphacoders.com/585/thumbbig-585645.webp' class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title">{subjectNameCapital}</h3>
                        </div>
                    </div>
                    <p className="card__description pb-2 fs-5">{subjectNameCapital}</p>
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => goTo(`/individualSubject/${subjectName}`)}className='mb-3'>Classes of {subjectNameCapital}</button>
                        </div>
                        <div className="col-12">
                            <button onClick={() => goTo(`/myResults/${subjectName}`)}>All Results Of {subjectNameCapital}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualAllSubject;