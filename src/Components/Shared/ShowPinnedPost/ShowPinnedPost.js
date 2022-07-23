import React, { useEffect, useState } from 'react';
import './ShowPinnedPost.css';

const ShowPinnedPost = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/pinnedPosts`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [posts])
	return (
		<div>
			{
				posts.length !== 0 && <button className='button-85 w-100'>
					<p>{posts[posts.length - 1]?.post}</p>
				</button>
			}
		</div>
	);
};

export default ShowPinnedPost;