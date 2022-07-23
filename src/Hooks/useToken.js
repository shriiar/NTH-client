import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";

const useToken = (user) => {
	const [token, setToken] = useState('');
	const [ID, setID] = useState([]);
	useEffect(() => {
		const getToken = async () => {
			const email = user?.user?.email;
			const student = JSON.parse(sessionStorage.getItem('student'));
			if (email) {

				console.log(student);
				if (student) {
					const { data } = await axios.post(`${process.env.REACT_APP_URL}/login`, { email });
					setToken(data.accessToken);
					sessionStorage.setItem('accessToken', data.accessToken);

					fetch(`${process.env.REACT_APP_URL}/students`, {
						method: 'POST',
						headers: {
							'content-type': 'application/json'
						},
						body: JSON.stringify(student)
					})
						.then(res => res.json())
						.then(data => {
							if (data.success) {
								toast(`${student?.name} you have been registered, Please verify your email`);
							}
							else {
								toast.error(`User already exist`);
								sessionStorage.removeItem('student');
							}
						});
				}
				else {
					const { data } = await axios.post(`${process.env.REACT_APP_URL}/login`, { email });
					setToken(data.accessToken);
					sessionStorage.setItem('accessToken', data.accessToken);
				}
			}
		}
		getToken();
	}, [user]);
	return [token];
}

export default useToken;