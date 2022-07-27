import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../../firebase.init'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import signUpSvg from '../../../img/undraw_Login_re_4vu2.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import useToken from '../../../Hooks/useToken';
import { format } from 'date-fns';
var md5 = require('md5');

const Signup = () => {

	let errorMsg;
	const nameRef = useRef("");
	const userIdRef = useRef("");
	const fatherRef = useRef("");
	const motherRef = useRef("");
	const classNameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");
	const [errorMessage, setErrorMessage] = useState("");
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	let student;

	let myArray = formattedDate.split(' ');

	let newYear = parseInt(myArray[2]);

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	const [updateProfile, updating] = useUpdateProfile(auth);
	const [email, setEmail] = useState("");
	const [studentID, setStudentID] = useState([]);

	const [ID, setID] = useState([]);

	const [token] = useToken(user);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	if (loading || updating) {
		return <Loading></Loading>
	}

	if (token) {
		navigate(from, { replace: true });
	}

	function containsSpecialChars(str) {
		const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		return specialChars.test(str);
	}

	function containsAnyLetter(str) {
		return /[a-zA-Z]/.test(str);
	}

	function onlyNumbers(str) {
		return /^([^0-9]*)$/.test(str);
	}

	function validEmail(str) {
		return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(str);
	}

	function validPassword(str) {
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(str);
	}

	const eventSubmit = async (event) => {
		event.preventDefault();
		sessionStorage.removeItem('student');

		const name = nameRef.current.value;
		const father = fatherRef.current.value;
		const mother = motherRef.current.value;
		const adress = event.target.adress.value;
		const phone = event.target.phone.value;
		const email = emailRef.current.value;
		const className = event.target.class.value;
		const userId = userIdRef.current.value;
		const batch = event.target.batch.value;
		const group = event.target.group.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (containsSpecialChars(userId)) {
			toast.error("User ID can't contain special characters");
			return;
		}

		if (containsAnyLetter(userId)) {
			toast.error("User ID can't contain characters");
			return;
		}

		if (onlyNumbers(userId)) {
			toast.error("Invalid User ID");
			return;
		}

		await fetch(`${process.env.REACT_APP_URL}/studentUserID?userId=${userId}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setID(data))

		await fetch(`${process.env.REACT_APP_URL}/regStudentID?userId=${userId}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudentID(data))

		console.log(studentID);

		if (ID[0]?.nameID !== userId || studentID.length !== 0) {
			toast.error("Student ID do not match");
			return;
		}

		if (password !== confirmPassword) {
			toast.error("passwords do not match");
			return;
		}

		if (containsSpecialChars(name)) {
			toast.error("Name can't contain special characters");
			return;
		}

		if (!containsAnyLetter(name)) {
			toast.error("Invalid Name");
			return;
		}

		if (!onlyNumbers(name)) {
			toast.error("Name can't contain numbers");
			return;
		}

		if (containsSpecialChars(father)) {
			toast.error("Father name can't contain special characters");
			return;
		}

		if (!containsAnyLetter(father)) {
			toast.error("Invalid Father Name");
			return;
		}

		if (!onlyNumbers(father)) {
			toast.error("Father Name can't contain numbers");
			return;
		}

		if (containsSpecialChars(mother)) {
			toast.error("Mother Name can't contain special characters");
			return;
		}

		if (!containsAnyLetter(mother)) {
			toast.error("Mother Invalid Name");
			return;
		}

		if (!onlyNumbers(mother)) {
			toast.error("Mother Name can't contain numbers");
			return;
		}

		if (containsSpecialChars(adress)) {
			toast.error("Adress can't contain special characters");
			return;
		}

		if (!containsAnyLetter(adress)) {
			toast.error("Invalid Adress");
			return;
		}

		if (containsSpecialChars(phone)) {
			toast.error("Phone No. can't contain special characters");
			return;
		}

		if (containsAnyLetter(phone)) {
			toast.error("Phone No. can't contain characters");
			return;
		}

		if (onlyNumbers(phone)) {
			toast.error("Invalid Phone No.");
			return;
		}

		if (!validEmail(email)) {
			toast.error("Invalid Email");
			return;
		}

		if (!validPassword(password)) {
			toast.error('Invalid Password');
			return;
		}


		setErrorMessage("");

		student = {
			name: name,
			father: father,
			mother: mother,
			adress: adress,
			phone: phone,
			className: className,
			userId: userId,
			batch: batch,
			group: group,
			email: email,
			password: md5(password),
			paid: false,
			lastPaid: null,
			due: null,
			payMonth: null,
			payYear: newYear
		}

		sessionStorage.setItem('student', JSON.stringify(student));

		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName: name });
	};

	if (error) {
		errorMsg = <p>{error?.message}</p>;
	}

	return (
		<div>
			<HelmetTitle title='Sign Up'></HelmetTitle>
			<div className="signup-div row">
				<div className='col-lg-7 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1'>
				</div>
				<div className='col-lg-5 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1 card-signup'>
					<div className='form-container'>
						<div>
							<h2 className='form-title mb-5 text-center pass-bg w-50 mx-auto p-3'>Sign Up</h2>
							<form onSubmit={eventSubmit}>
								<div className="input-group">
									<input placeholder='Your Name' ref={nameRef} type="name" name="name" required />
								</div>
								<div className="input-group">
									<input placeholder='Fathers Name' ref={fatherRef} type="father" name="father" required />
								</div>
								<div className="input-group">
									<input placeholder='Mothers Name' ref={motherRef} type="mother" name="mother" required />
								</div>
								<div className="input-group">
									<input placeholder='Adress' type="text" name="adress" required />
								</div>
								<div className="input-group">
									<input placeholder='Phone No.' min={0} type="text" name="phone" required />
								</div>
								<div className="input-group">
									<select name="class" type="class">
										<option value="5">Class 5</option>
										<option value="6">Class 6</option>
										<option value="7">Class 7</option>
										<option value="8">Class 8</option>
										<option value="9">Class 9</option>
										<option value="10">Class 10</option>
									</select>
								</div>
								<div className="input-group">
									<input placeholder='Your Student ID' ref={userIdRef} type="text" name="userId" required />
								</div>
								<div className="input-group">
									<label for="batch">Batch: </label>
									<select name="batch" type='batch'>
										<option value="bangla">Bangla Medium</option>
										<option value="english">English Medium</option>
									</select>
								</div>
								<div className="input-group">
									<label for="group">Group: </label>
									<select name="group" type='group'>
										<option value="under9">No Group Yet</option>
										<option value="science">Science</option>
										<option value="commerce">Commerce</option>
									</select>
								</div>
								<div className="input-group">
									<input placeholder='Your Email' ref={emailRef} type="email" name="email" required />
								</div>
								<p className='my-5 pass-bg p-2 fw-bold'>Password must be Minimum 8 characters, at least one uppercase letter, one lowercase letter and one digit, No Special character</p>
								<div className="input-group">
									<input placeholder='Password' ref={passwordRef} type="password" name="password" />
								</div>
								<div className="input-group">
									<input placeholder='Confirm Password' ref={confirmPasswordRef} type="password" name="confirm-password" required />
								</div>
								<input className='form-submit button-87 mx-auto w-75' type="submit" required value="Signup" />
							</form>
							<h6 className="text-danger my-3"> {errorMsg}</h6>
							<h6 className="text-danger my-3"> {errorMessage}</h6>
							<p className='my-3 fs-5 text-white'>
								Already have an account? <Link style={{ color: "#f58320" }} className='form-link fw-bold' to='/login'>Login</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Signup;