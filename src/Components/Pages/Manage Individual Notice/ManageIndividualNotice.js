import React from 'react';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const ManageIndividualNotice = (props) => {
    const {notice, setNotice} = props;
    const { description, className, batch, group, date, _id } = props.noc;
    const deleteNotice = () => {
        const url = `http://localhost:5000/notice?className=${props.noc?.className}&batch=${props.noc?.batch}&group=${props.noc?.group}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = notice.filter(item => item._id !== _id);
                    toast('Successfully Deleted');
                    setNotice(remaining);
                }
            })
    }
    return (
        <div className='p-3'>
            <div className='card d-flex align-items-center justify-content-center'>
                <h1>Class {className}</h1>
                <h2>Batch {batch}</h2>
                <h3>Group {group}</h3>
                <h3>Notice: {description}</h3>
                <h3>{date}</h3>
                <Button onClick={() => deleteNotice()}>Delete Notice</Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageIndividualNotice;