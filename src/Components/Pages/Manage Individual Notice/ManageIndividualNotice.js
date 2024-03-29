
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const ManageIndividualNotice = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { notice, setNotice } = props;
    const { description, className, batch, group, date, _id } = props.noc;
    const deleteNotice = () => {
        const url = `${process.env.REACT_APP_URL}/notice?id=${props?.noc?._id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = notice.filter(item => item._id !== _id);
                    toast.success('Successfully Deleted');
                    setNotice(remaining);
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
                    <p>
                        Notice: <span className='text-danger'>{description}</span>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => deleteNotice()}>Delete Notice</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='p-5'>
            <div className='card d-flex flex-column align-items-center justify-content-center mx-auto w-100 h-100'>
                <h1>Class: {className}</h1>
                <h2>Batch: {batch.toUpperCase()}</h2>
                <h3>Group: {group.toUpperCase()}</h3>
                <h3>Notice: {description}</h3>
                <h3>{date}</h3>
                <button className='button-87' variant="primary" onClick={() => setModalShow(true)}>
                    Delete Notice
                </button>
            </div>
            <ToastContainer></ToastContainer>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default ManageIndividualNotice;