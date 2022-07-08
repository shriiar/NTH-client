import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddNotice = () => {
    const noticeRef = useRef();
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    const EventSubmit = async (event) => {
        event.preventDefault();
        const notice = {
            description: noticeRef.current.value,
            date: event.target.date.value,
            className: event.target.className.value,
            batch: event.target.batch.value,
            group: event.target.group.value,
        }
        console.log(notice);
        let toastText = `Class ${notice.className} Batch ${notice.batch} Group ${notice.group}`

        fetch('https://infinite-cliffs-52841.herokuapp.com/notice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(notice)
        })
            .then(res => res.json())
            .then(data => {
                toast(`Notice Added for ${toastText}`)
            });
    };
    return (
        <div>
            <form onSubmit={EventSubmit}>
                <div className="input-group mb-0 w-75 mx-auto">
                    <label htmlFor='noticeText'>Description</label>
                    <textarea cols="60" rows="7" ref={noticeRef} type="noticeText" name="noticeText" id='email' required />
                </div>
                <div className="input-group w-75 mx-auto">
                    <label htmlFor='date'>Date</label>
                    <input type="text" readOnly value={formattedDate} name="date" />
                </div>
                <div className="input-group">
                    <label for="className">Class </label>
                    <select name="className" type="className">
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                    </select>
                </div>
                <div className="input-group">
                    <label for="batch">Batch </label>
                    <select name="batch" type='batch'>
                        <option value="bangla">Bangla Medium</option>
                        <option value="english">English Medium</option>
                    </select>
                </div>
                <div className="input-group">
                    <label for="group">Group </label>
                    <select name="group" type='group'>
                        <option value="under9">No Group Yet</option>
                        <option value="science">Science</option>
                        <option value="commerce">Commerce</option>
                    </select>
                </div>
                <input className='form-submit button-33 w-25 mx-auto' type="submit" required value="Login" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddNotice;