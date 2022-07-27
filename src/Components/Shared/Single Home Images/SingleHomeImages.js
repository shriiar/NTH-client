import React from 'react';
import Flip from 'react-reveal/Flip';


const SingleHomeImages = ({ item }) => {
	return (
		<div class="box px-3">
			<Flip bottom>
				<img src={item.img} className='img-fluid' alt="" />
				<span>0</span>
			</Flip>
		</div>
	);
};

export default SingleHomeImages;