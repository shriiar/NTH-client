
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const ManageIndividualNotice = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { notice, setNotice } = props;
    const { description, className, batch, group, date, _id } = props.noc;
    const deleteNotice = () => {
        const url = `https://infinite-cliffs-52841.herokuapp.com/notice?className=${props.noc?.className}&batch=${props.noc?.batch}&group=${props.noc?.group}`;
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
        <div className='p-3'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Class {className}</h1>
                <h2>Batch {batch}</h2>
                <h3>Group {group}</h3>
                <h3>Notice: {description}</h3>
                <h3>{date}</h3>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Delete Notice
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

export default ManageIndividualNotice;