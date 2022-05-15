
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
    const goToSubject = () => {
        navigate(`/individualSubject/${subjectName}`)
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
                    <button onClick={() => goToSubject()}>Classes of {subjectNameCapital}</button>
                </div>
            </div>
        </div>
    );
};

export default IndividualAllSubject;