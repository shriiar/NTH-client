import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleSubjectVideos = (props) => {
	const { subject, name, videoUrl, date, subjectCode } = props.subjectVid;

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

	let img;
	if (subject === 'bangla 1st paper') img = subImg[0]?.Bangla1;
	if (subject === 'bangla 2nd paper') img = subImg[0]?.Bangla2;
	if (subject === 'english 1st paper') img = subImg[0]?.English1;
	if (subject === 'english 2nd paper') img = subImg[0]?.English2;
	if (subjectCode === 'mathematics') img = subImg[0]?.Math;
	if (subjectCode === 'bgs') img = subImg[0]?.Bgs;
	if (subjectCode === 'science') img = subImg[0]?.Science;
	if (subjectCode === 'physics') img = subImg[0]?.Physics;
	if (subjectCode === 'chemistry') img = subImg[0]?.Chemistry;
	if (subjectCode === 'biology') img = subImg[0]?.Biology;
	if (subjectCode === 'religion') img = subImg[0]?.Religion;
	if (subjectCode === 'ict') img = subImg[0]?.Ict;

	localStorage.removeItem("singleSubjectVideo");
	const navigate = useNavigate();
	const goToSubject = () => {
		let subjectObj = [{
			subject: subject, name: name, videoUrl: videoUrl
		}];
		// console.log(subjectObj);
		const storedSubjectObj = localStorage.getItem('singleSubjectVideo');
		if (storedSubjectObj) {
			subjectObj = JSON.parse(storedSubjectObj);
		}
		localStorage.setItem('singleSubjectVideo', JSON.stringify(subjectObj));
		navigate('/singleSubjectVideo');
	}

	return (
		<div className='p-5'>
			<div className='card-sub border-0'>
				<img src={img} class="card__image w-100" alt="" />
				<div class="card__overlay">
					<div class="card__header">
						<div class="card__header-text fs-1 text-start">
							<h3 class="card__title text-white">{name}</h3>
							<h3 className='text-white'>{date}</h3>
						</div>
					</div>
					<p className="card__description pb-2 fs-5 text-white text-start">{subject}</p>
					<button className='button-87 w-50 mx-auto my-3' onClick={() => goToSubject()}>Video of {name}</button>
				</div>
			</div>		</div>
	);
};

export default SingleSubjectVideos;