import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleAllSubjectResults = (props) => {
    const { allResult, setAllResult } = props;
    const { name, className, batch, group, subject, topic, mark, fmark, _id } = props.res;
    const deleteRecord = () => {
        const url = `http://localhost:5000/results?className=${props.res?.className}&batch=${props.res?.batch}&group=${props.res?.group}&subject=${subject}&topic=${topic}&id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = allResult.filter(item => item._id !== _id);
                    toast('Successfully Deleted');
                    setAllResult(remaining);
                }
            })
    }
    return (
        <div className='p-3'>
            <div className='card d-flex justify-content-center align-items-center'>
                <h1>{name}</h1>
                <h2>{subject}</h2>
                <h2>{topic}</h2>
                <h3>Mark: <span className='text-danger'>{mark} / {fmark}</span></h3>
                <button onClick={() => deleteRecord()}>Delete Record</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleAllSubjectResults;