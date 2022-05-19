import React from 'react';

const Student = ({student}) => {
    const imageStorageKey = 'f3e7e3f9cefdf2232b287f54b64bea6e';
    const formData = new FormData();
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
                        img: img
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