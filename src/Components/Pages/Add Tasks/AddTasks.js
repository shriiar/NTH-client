import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import './AddTasks.css'

const AddTasks = () => {


    const EventSubmit = (event) => {
        event.preventDefault();

        const myArray = event.target.subject.value.split(" ");
        let subjectName = '';
        for (let i = 0; i < myArray.length; i++) {
            subjectName += myArray[i];
        }

        subjectName = subjectName.toLowerCase();

        const newItem = {
            subject: event.target.subject.value, name: event.target.name.value, subjectCode: subjectName, videoUrl: event.target.vidUrl.value,
            className: event.target.class.value, batch: event.target.batch.value, group: event.target.group.value
        };

        console.log(newItem);
        const url = `http://localhost:5000/subWAcc`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast(`Topic Has Been Added`)
                }
                else {
                    toast.error(`This Video already exist`);
                }
            })
        // event.target.reset();
    };
    return (
        <div>
            <HelmetTitle title='Add To Inventory'></HelmetTitle>
            <div style={{ margin: "0 0 1050px 0" }} class="page-add">
                <div class="container-add">
                    <div class="left-add">
                        <div class="login">Add Items</div>
                        <img src={addImg} className='img-fluid' alt="" />
                    </div>

                    <div class="right-add d-flex align-items-center justify-content-center">
                        <form onSubmit={EventSubmit} className="w-100">
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='subject'>Subject</label>
                                <input type="subject" name="subject" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='name'>Topic Name</label>
                                <input type="name" name="name" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='vidUrl'>Video Url</label>
                                <input type="text" name="vidUrl" required />
                            </div>
                            <div className="input-group">
                                <label for="class">Class: </label>
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
                            <input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Submit" />
                            <ToastContainer></ToastContainer>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default AddTasks;