import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleSubjectVideos = (props) => {
    const { subject, name, videoUrl, date } = props.subjectVid;
    localStorage.removeItem("singleSubjectVideo");
    const navigate = useNavigate();
    const goToSubject = () => {
        let subjectObj = [{
            subject: subject, name: name, videoUrl: videoUrl
        }];
        console.log(subjectObj);
        const storedSubjectObj = localStorage.getItem('singleSubjectVideo');
        if (storedSubjectObj) {
            subjectObj = JSON.parse(storedSubjectObj);
        }
        localStorage.setItem('singleSubjectVideo', JSON.stringify(subjectObj));
        navigate('/singleSubjectVideo');
    }

    return (
        <div>
            <div>
                <div className='card border-0'>
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text fs-1 text-start">
                                <h3 class="card__title">{name}</h3>
								<h3>{date}</h3>
                            </div>
                        </div>
                        <p className="card__description pb-2 fs-5">{subject}</p>
                        <button onClick={() => goToSubject()}>Video of {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSubjectVideos;