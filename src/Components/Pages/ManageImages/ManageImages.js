import React, { useEffect, useState } from 'react';
import SingleImage from '../SingleImage/SingleImage';

const ManageImages = () => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/images`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setImages(data))
	}, [])
	console.log(images);
	return (
		<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					images.slice(0).reverse().map(item => <SingleImage key={item._id} item={item} images={images} setImages={setImages}></SingleImage>)
				}
			</div>
	);
};

export default ManageImages;