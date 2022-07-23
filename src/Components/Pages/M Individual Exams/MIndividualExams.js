import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const MIndividualExams = ({ exam, exams, setExams }) => {

    const [modalShow, setModalShow] = useState(false);
    const { className, batch, group, name, topic, date, _id } = exam;

    const deleteExam = () => {
        const url = `${process.env.REACT_APP_URL}/exams?id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = exams.filter(item => item._id !== _id);
                    toast.success('Successfully Deleted');
                    setExams(remaining);
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
                        Class {className}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Batch {batch}</h4>
                    <h4>Group {group}</h4>
                    <h5>{name}</h5>
                    <h5>{topic}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => deleteExam()}>Delete Quiz</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='p-3'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Class {className}</h1>
                <h2>Batch {batch}</h2>
                <h3>Group {group}</h3>
                <h4>{name}</h4>
                <h4>Quiz on <span className='text-danger'>{topic}</span></h4>
                <h4>{date}</h4>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Delete Quiz
                </Button>
            </div>
            <ToastContainer></ToastContainer>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default MIndividualExams;