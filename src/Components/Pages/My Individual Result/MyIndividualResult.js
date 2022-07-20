import React, { useEffect, useState } from 'react';

const MyIndividualResult = (props) => {

	const [subImg, setSubImg] = useState([]);
	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/subimg`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setSubImg(data))
	}, [])

	console.log(props.res, subImg);

	const { className, group, batch, date, topic, mark, fmark, subject, highest } = props.res;
	let img;

	if (props.res.subjectCode === 'bangla 1st paper') img = subImg[0]?.Bangla1;
	if (props.res.subjectCode === 'bangla 2nd paper') img = subImg[0]?.Bangla2;
	if (props.res.subjectCode === 'english 1st paper') img = subImg[0]?.English1;
	if (props.res.subjectCode === 'english 2nd paper') img = subImg[0]?.English2;
	if (props.res.subjectCode === 'mathematics') img = subImg[0]?.Math;
	if (props.res.subjectCode === 'bgs') img = subImg[0]?.Bgs;
	if (props.res.subjectCode === 'science') img = subImg[0]?.Science;
	if (props.res.subjectCode === 'physics') img = subImg[0]?.Physics;
	if (props.res.subjectCode === 'chemistry') img = subImg[0]?.Chemistry;
	if (props.res.subjectCode === 'biology') img = subImg[0]?.Biology;
	if (props.res.subjectCode === 'religion') img = subImg[0]?.Religion;
	if (props.res.subjectCode === 'ict') img = subImg[0]?.Ict;

	console.log(img);
	return (
		<div className='p-3 mt-5'>
			<div className='card d-flex justify-content-center mx-auto w-75 p-4 h-100'>
				<img src={img} alt="" />
				<h1 className='text-upload'>{subject}</h1>
				<h3 className='text-upload'>{topic}</h3>
				<h3>Marks: <span className='text-upload'>{mark} / {fmark}</span></h3>
				<h3>Highest: <span className='text-upload'>{highest} / {fmark}</span></h3>
				<h4>{date}</h4>
			</div>
		</div>
	);
};

export default MyIndividualResult;