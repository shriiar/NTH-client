import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Message from './Message';
import Progress from './Progress';

const Student = () => {

    const [student, setStudent] = useState([]);
    const [user] = useAuthState(auth);

    const [image, setImage] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/students?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [user])

    const imageStorageKey = 'f3e7e3f9cefdf2232b287f54b64bea6e';
    console.log(student);

    const onChange = e => {
        setImage(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        console.log(image);

        if (!image) {
            setFilename('');
            return;
        }

        const res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                setUploadPercentage(
                    parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                );
                const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.success) {
                            const img = result.data.url;
                            console.log(img);

                            setTimeout(() => setUploadPercentage(0), 10000);
                            const { fileName, filePath } = res.data;
                            setUploadedFile({ fileName, filePath });
                            setMessage('File Uploaded');
                            setFilename('');
                            setImage('');
                            formData = {};


                            const updateProfile = {
                                name: student[0]?.name,
                                father: student[0]?.father,
                                mother: student[0]?.mother,
                                className: student[0]?.className,
                                batch: student[0]?.batch,
                                group: student[0]?.group,
                                email: student[0]?.email,
                                img: img,
                                paid: student[0]?.paid,
                                lastPaid: student[0]?.lastPaid,
                                due: student[0]?.due,
                                payMonth: student[0]?.payMonth,
                                payYear: student[0]?.payYear
                            }
                            fetch(`http://localhost:5000/students/${updateProfile.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(updateProfile)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                })
                        }
                    })
            }
        });
        e.target.reset();
    };

    return (
        <div>
            <Fragment>
                {message ? <Message msg={message} /> : null}
                <form onSubmit={onSubmit}>
                    <div className='custom-file mb-4'>
                        <input
                            type='file'
                            className='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {filename}
                        </label>
                    </div>

                    <Progress percentage={uploadPercentage} />

                    <input
                        type='submit'
                        value='Upload'
                        className='btn btn-primary btn-block mt-4'
                    />
                </form>
            </Fragment>
        </div>
    );
};

export default Student;