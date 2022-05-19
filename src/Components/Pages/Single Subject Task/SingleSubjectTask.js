import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SingleSubjectTask = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { className, batch, group, name, subject, subjectCode, videoUrl, _id } = props.item;
    const { task, setTask } = props;
    const deleteTask = () => {
        const url = `http://localhost:5000/subWAcc?id=${_id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = task.filter(item => item._id !== _id);
                    toast.success('Successfully Deleted');
                    setTask(remaining);
                }
            })
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {subject}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{batch}</h4>
                    <h4>Group {group}</h4>
                    <p>
                        Topic: <span className='text-danger'>{name}</span>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => deleteTask()} className='mb-3'>Delete {name}</button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div className='card border-0 mb-3'>
            <iframe className='w-100' src={videoUrl} width="400" height="400" allow="autoplay"></iframe>
            <div class="card__overlay">
                <div class="card__header">
                    <div class="card__header-text fs-1">
                        <h3 class="card__title">{name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Delete Notice
                        </Button>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default SingleSubjectTask;