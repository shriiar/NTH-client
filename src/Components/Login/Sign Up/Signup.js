import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../../firebase.init'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import signUpSvg from '../../../img/undraw_Login_re_4vu2.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

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
    const [agree, setAgree] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [email, setEmail] = useState("");

    // const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const checkAgree = () => {
        if (agree === false) setAgree(true);
        else setAgree(false);
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate(from, { replace: true });
    }

    const eventSubmit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const father = fatherRef.current.value;
        const mother = motherRef.current.value;
        const email = emailRef.current.value;
        const className = event.target.class.value;
        const userId = userIdRef.current.value
        const batch = event.target.batch.value;
        const group = event.target.group.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        let studentObj = [{
            className: event.target.class.value,
            group: event.target.group.value,
            batch: event.target.batch.value
        }]
        localStorage.setItem('studentObj', JSON.stringify(studentObj));

        setErrorMessage("");

        const student = {
            name: name,
            father: father,
            mother: mother,
            className: className,
            userId: userId,
            batch: batch,
            group: group,
            email: email,
            password: password
        }

        fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`${name} you have been registered, Please verify your email`)
                }
                else {
                    toast.error(`User already exist`);
                }
            });

        console.log(name, father, mother, email, password, className, batch, group, userId);
        if (agree) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
        }
        else {
            setErrorMessage('Please Agree Terms & Conditions');
        }
    };

    if (error) {
        errorMsg = <p>{error?.message}</p>;
    }
    return (
        <div>
            <HelmetTitle title='Sign Up'></HelmetTitle>
            <div className="row align-items-center">
                <div className='col-lg-7 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1'>
                    <img className='wave img-fluid' src={signUpSvg} alt="signup svg image" />
                </div>
                <div className='col-lg-5 col-md-12 order-1 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                    <div className='form-container'>
                        <div>
                            <h2 className='form-title mb-5 text-center'>Sign Up</h2>
                            <form onSubmit={eventSubmit}>
                                <div className="input-group">
                                    <label htmlFor='name'>Name</label>
                                    <input ref={nameRef} type="name" name="name" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor='father'>Father's Name</label>
                                    <input ref={fatherRef} type="father" name="father" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor='mother'>Mother's Name</label>
                                    <input ref={motherRef} type="mother" name="mother" required />
                                </div>
                                <div className="input-group">
                                    <label ref={classNameRef} for="class">Class: </label>
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
                                    <label htmlFor='userId'>Your Student ID</label>
                                    <input ref={userIdRef} type="userId" name="userId" required />
                                </div>
                                <div className="input-group">
                                    <label for="batch">Batch: </label>
                                    <select name="batch" type='batch'>
                                        <option value="bangla">Bangla Medium</option>
                                        <option value="english">English Medium</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label for="group">Batch: </label>
                                    <select name="group" type='group'>
                                        <option value="under9">No Group Yet</option>
                                        <option value="science">Science</option>
                                        <option value="commerce">Commerce</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor='email'>Email</label>
                                    <input ref={emailRef} type="email" name="email" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor='password'>Password</label>
                                    <input ref={passwordRef} type="password" name="password" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor='confirm-password'>Confirm Password</label>
                                    <input ref={confirmPasswordRef} type="password" name="confirm-password" required />
                                </div>
                                <input onClick={checkAgree} className='mb-3' type="checkbox" name="terms" id="" />
                                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor='terms'>Accepct terms and conditions</label>
                                <input className='form-submit' type="submit" required value="Signup" />
                            </form>
                            <h6 className="text-danger my-3"> {errorMsg}</h6>
                            <h6 className="text-danger my-3"> {errorMessage}</h6>
                            <ToastContainer />
                            <p className='my-3 fs-5'>
                                Already have an account? <Link className='form-link' to='/login'>Login</Link>
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