import { format } from 'date-fns';
import fi from 'date-fns/esm/locale/fi/index.js';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleStudentPayment = (props) => {
    const { allStudents, setAllStudents } = props;
    const { student } = props;
    console.log(student);
    const { name, father, mother, className, batch, group, email, img } = student;
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    let myArray = formattedDate.split(' ');
    console.log(myArray);

    let newDate = myArray[1][0], payYear = parseInt(myArray[2]);
    if (myArray[1].length > 2) {
        newDate += myArray[1][1];
    }

    console.log(newDate);

    console.log(formattedDate);

    const paid = (paid) => {
        let updatedUser;
        if (paid === 'paid') {
            updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: true, lastPaid: formattedDate, due: null, payMonth: null, payYear: payYear };
        }
        else {
            updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: false, lastPaid: null, due: null, payMonth: myArray[0], payYear: payYear };
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

                fetch(`http://localhost:5000/students?className=${className}&batch=${batch}&group=${group}`, {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setAllStudents(data))
            })
    }
    return (
        <div className='card d-flex align-items-center justify-content-center'>
            <h1>{student.name}</h1>
            <h2>Class: {student.className}</h2>
            <h2>Batch: {student.batch}</h2>
            <h3>Group: {student.group}</h3>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleStudentPayment;