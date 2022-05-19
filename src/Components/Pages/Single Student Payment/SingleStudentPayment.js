import { format } from 'date-fns';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleStudentPayment = (props) => {
    const { allStudents, setAllStudents } = props;
    const { student } = props;
    const { name, father, mother, className, batch, group, email, img } = student;
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    const paid = (paid) => {
        let updatedUser;
        if (paid === 'paid') {
            updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: true, lastPaid: formattedDate };
        }
        else {
            updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: false, lastPaid: null };
        }
        console.log(updatedUser);
        fetch(`http://localhost:5000/students/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Payment Updated`);
                for(let i = 0; i < allStudents.length; i++){
                    if(allStudents[i]._id === student._id){
                        allStudents[i].paid = updatedUser.paid;
                        allStudents[i].paid = updatedUser.paid;
                    }
                }
                setAllStudents(allStudents);
            })
    }
    return (
        <div className='card d-flex align-items-center justify-content-center'>
            <h1>{student.name}</h1>
            <h2>Class: {student.className}</h2>
            <h2>Batch: {student.batch}</h2>
            <h3>Group: {student.group}</h3>
            <h2>
                {
                    student.paid ? <>
                        <h2>
                            Paid: <span className='text-success'>Paid</span>
                        </h2>
                        <button onClick={() => paid('not paid')}>Not Paid</button>
                    </>
                        :
                        <>
                            <h2>
                                Paid: <span className='text-danger'>Not Paid</span>
                            </h2>
                            <button onClick={() => paid('paid')}>Paid</button>
                        </>
                }
            </h2>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleStudentPayment;