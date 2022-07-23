import React, { useEffect, useState } from 'react';
import SinglePost from '../Single Post/SinglePost';
import empty from '../../../img/empty.jpg';
import './ManagePinnedPost.css';

const ManagePinnedPost = () => {

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
	}, [])
	console.log(posts);

	return (
		<div>			
			{
			posts.length === 0 && <div>
				<h1 className='mt-5'>No Pinned Post</h1>
				<img src={empty} className='img-fluid' width='900px' alt="" style={{ margin: "0 0 0 100px" }} />
			</div>
		}
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					posts.slice(0).reverse().map(item => <SinglePost key={item._id} item={item} posts={posts} setPosts={setPosts}></SinglePost>)
				}
			</div>
		</div>
	);
};

export default ManagePinnedPost;