import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './ShowPinnedPost.css';

const ShowPinnedPost = () => {

	const [posts, setPosts] = useState([]);
	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);

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

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user?.email])

	const marginElement1 = <div style={{ margin: "0 0 300px 0" }}></div>
	const marginElement2 = <div style={{ margin: "0 0 100px 0" }}></div>

	return (
		<div>
			{
				(student[0]?.due === 1 || student[0]?.due === 2) ? <>
					{marginElement1}
				</>
					: <>{marginElement2}</>
			}
			{
				(posts.length !== 0 && user) && <div>
					<p className='fw-bold w-100 pinnedPost container mx-auto button-87 mb-5 px-5'>{posts[posts?.length - 1]?.post}</p>
				</div>
			}
		</div>
	);
};

export default ShowPinnedPost;