import React from 'react';
import auth from '../../../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import UserEmailVer from '../../../img/VerifyEmail.png';

const UserEmailVerification = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    return (
        <div className='text-center' style={{ margin: "100px auto", color: "#f6861f" }}>
            <h1 style={{ width: "50%", margin: "auto"}} className='mb-4 button-1'>Email Sent</h1>
            <h3 className='mb-4'>Please Verify Your Email</h3>
			<p className='fs-5'>Check Primary or Spam folder</p>
            <button className='button-87 mx-auto'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}
            >Resend Email Verfification</button>
            <img src={UserEmailVer} className='img-fluid' width='800px' alt="" />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UserEmailVerification;