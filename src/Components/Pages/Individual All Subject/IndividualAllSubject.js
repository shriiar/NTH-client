import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './IndividualAllSubject.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const IndividualAllSubject = (props) => {

    const { student } = props;

    // console.log(student);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

    const className = student[0].className;
    const batch = student[0].batch;
    const group = student[0].group;

    let subjectNameCapital = props.subject;
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
        <div className='card-pos'>
            <div data-aos='fade-up' className='card border-0 mb-3'>
                <img src='https://images5.alphacoders.com/585/thumbbig-585645.webp' class="card__image w-100" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title">{subjectNameCapital.toUpperCase()}</h3>
                        </div>
                    </div>
                    {/* <p className="card__description pb-2 fs-5">{subjectNameCapital}</p> */}
                    <div className="row">
                        <div className="col-12">
                            <Button onClick={() => goTo(`/individualSubject/${className}/${batch}/${group}/${subjectName}`)} className='mb-3'>Classes of {subjectNameCapital}</Button>
                        </div>
                        <div className="col-12">
                            <Button className='mb-3' onClick={() => goTo(`/myResults/${subjectName}`)}>All Results Of {subjectNameCapital}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualAllSubject;