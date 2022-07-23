import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

const AddStudentResult = () => {

    const { email } = useParams();
    // console.log(email);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    const [student, setStudent] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/students/admin?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [email])

    // console.log(student);

    const EventSubmit = (event) => {
        event.preventDefault();

        const myArray = event.target.subject.value.split(" ");
        let subjectName = '';
        for (let i = 0; i < myArray.length; i++) {
            subjectName += myArray[i];
        }

        subjectName = subjectName.toLowerCase();

        const result = {
            name: event.target.name.value, email: event.target.email.value, subject: event.target.subject.value, subjectCode: subjectName, topic: event.target.topic.value, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, mark: event.target.mark.value, fmark: event.target.fmark.value, date: event.target.date.value
        };

        // console.log(result);
        const url = `${process.env.REACT_APP_URL}/results`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(result => {
                toast(`Result Has Been Added for ${student[0]?.name}`)
            })
        event.target.reset();
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
                                <label htmlFor='name'>Name</label>
                                <input value={student[0]?.name} readOnly type="text" name="name" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='email'>Email</label>
                                <input value={student[0]?.email} readOnly type="text" name="email" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='subject'>Subject</label>
                                <input type="text" name="subject" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='topic'>Topic Name</label>
                                <input type="text" name="topic" required />
                            </div>
                            <div className='row'>
                                <div className="col-6">
                                    <div className="input-group w-75 mx-auto">
                                        <label htmlFor='mark'>Attained Mark</label>
                                        <input type="number" min={0} name="mark" required />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group w-75 mx-auto">
                                        <label htmlFor='fmark'>Full Mark</label>
                                        <input type="number" min={0} name="fmark" required />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='date'>Date</label>
                                <input value={formattedDate} type="text" name="date" required />
                            </div>
                            <input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Add Result" />
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default AddStudentResult;