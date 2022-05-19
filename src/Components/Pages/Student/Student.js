import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Student = () => {

    const [student, setStudent] = useState([]);
    const [user] = useAuthState(auth);

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
    const formData = new FormData();
    console.log(student);
    const onFileChange = (e) => {
        const image = e.target.files[0];
        console.log(image);
        console.log(student);
        formData.append('image', image);
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
                        payMonth: student[0]?.payMonth
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

    return (
        <div>
            <input type="file" onChange={onFileChange} name="file_upload" />
        </div>
    );
};

export default Student;