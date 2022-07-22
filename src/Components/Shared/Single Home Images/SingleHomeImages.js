import React from 'react';

const SingleHomeImages = ({item}) => {
	return (
		<div class="box">
			<img src={item.img} className='img-fluid' alt="" />
			<span>0</span>
		</div>
	);
};

export default SingleHomeImages;