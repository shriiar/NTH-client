import React from 'react';
import './SingleSubjectVideo.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const SingleSubjectVideo = () => {

	let subjectObj = [];
	const storedSubjectObj = localStorage.getItem('singleSubjectVideo');
	if (storedSubjectObj) {
		subjectObj = JSON.parse(storedSubjectObj);
	}

	// console.log(subjectObj);

	return (
		<div>
			<Zoom>
				<h1>{subjectObj[0]?.subject}</h1>
			</Zoom>
			<Fade bottom big>
				<h1>{subjectObj[0]?.name}</h1>
			</Fade>
			<Fade bottom big>
				<iframe className='w-100' src={`${subjectObj[0]?.videoUrl}`} width="1280" height="860" allow="autoplay"></iframe>
			</Fade>
		</div>
	);
};

export default SingleSubjectVideo;