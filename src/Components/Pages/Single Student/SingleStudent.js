import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SingleStudent = (props) => {
    const navigate = useNavigate();
    const { allStudents, setAllStudents } = props;
    const { name, father, mother, className, batch, group, email, _id } = props.student;
    const updateStudent = () => {
        let studentObj = [{
            className: className,
            group: group,
            batch: batch,
            name: name,
            father: father,
            mother: mother,
            email: email,
            id: _id
        }]
        localStorage.removeItem('updateStudent');
        localStorage.setItem('updateStudent', JSON.stringify(studentObj));
        navigate('/updateStudent');
    }

    const deleteStudent = () => {
        const url = `http://localhost:5000/students?className=${className}&batch=${batch}&group=${group}&name=${name}&father=${father}&mother=${mother}&email=${email}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = allStudents.filter(item => item._id !== _id);
                    toast('Successfully Deleted');
                    setAllStudents(remaining);
                }
            })
    }
    return (
        <div className='row'>
            <div className='col-6 card d-flex justify-content-center'>
                <h1>{name}</h1>
                <h2>Father's Name: {father}</h2>
                <h2>Mothers's Name: {mother}</h2>
                <h3>Class: {className}</h3>
                <h3>Batch: {batch}</h3>
                <h3>Group: {group}</h3>
                <h3>{email}</h3>
            </div>
            <div className='col-6 card d-flex justify-content-center'>
                <button onClick={() => updateStudent()} className='mb-5'>Update {name}'s Profile</button>
                <button onClick={() => deleteStudent()}>Delete {name}'s Profile</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleStudent;