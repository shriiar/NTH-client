import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './IndividualAllSubject.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const IndividualAllSubject = (props) => {

    const { student } = props;

	const [subImg, setSubImg] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/subimg`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setSubImg(data))
    }, [])

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

	let img;

	if(props.subject === 'bangla 1st paper') img = subImg[0]?.Bangla1;
	if(props.subject === 'bangla 2nd paper') img = subImg[0]?.Bangla2;
	if(props.subject === 'english 1st paper') img = subImg[0]?.English1;
	if(props.subject === 'english 2nd paper') img = subImg[0]?.English2;
	if(props.subject === 'mathematics') img = subImg[0]?.Math;
	if(props.subject === 'bgs') img = subImg[0]?.Bgs;
	if(props.subject === 'science') img = subImg[0]?.Science;
	if(props.subject === 'physics') img = subImg[0]?.Physics;
	if(props.subject === 'chemistry') img = subImg[0]?.Chemistry;
	if(props.subject === 'biology') img = subImg[0]?.Biology;
	if(props.subject === 'religion') img = subImg[0]?.Religion;
	if(props.subject === 'ict') img = subImg[0]?.Ict;

    return (
        <div className='card-pos'>
            <div data-aos='fade-up' className='card-sub border-0 mb-3'>
                <img src={img} class="card__image w-100" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title text-white">{subjectNameCapital.toUpperCase()}</h3>
                        </div>
                    </div>
                    {/* <p className="card__description pb-2 fs-5">{subjectNameCapital}</p> */}
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => goTo(`/individualSubject/${className}/${batch}/${group}/${subjectName}`)} className='mb-3 button-87'>Classes of {subjectNameCapital}</button>
                        </div>
                        <div className="col-12">
                            <button className='mb-3 button-87' onClick={() => goTo(`/myResults/${subjectName}`)}>All Results Of {subjectNameCapital}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualAllSubject;