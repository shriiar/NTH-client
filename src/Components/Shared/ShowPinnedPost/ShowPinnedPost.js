import React, { useEffect, useState } from 'react';
import './ShowPinnedPost.css';

const ShowPinnedPost = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/pinnedPosts`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])
	
	return (
		<div>
			{
				posts.length !== 0 && <button className='button-85 w-100 d-'>
					<p className='fw-bold'>{posts[posts.length - 1]?.post}</p>
				</button>
			}
		</div>
	);
};

export default ShowPinnedPost;