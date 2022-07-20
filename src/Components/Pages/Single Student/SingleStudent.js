import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './SingleStudent.css'

const SingleStudent = (props) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);

    const { allStudents, setAllStudents } = props;
    const { name, father, mother, className, batch, group, email, _id, img } = props.student;
    const updateStudent = () => {
        navigate(`/updateStudent/${email}/${_id}`);
    }

    const deleteStudent = () => {
        const url = `https://infinite-cliffs-52841.herokuapp.com/students?className=${className}&batch=${batch}&group=${group}&name=${name}&father=${father}&mother=${mother}&email=${email}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = allStudents.filter(item => item._id !== _id);
                    toast.success('Successfully Deleted');
                    setAllStudents(remaining);
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
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => deleteStudent()}>Delete {name}'s Profile</button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='p-3'>
            <div className='card-sub border-0 mb-3'>
                {
                    img && <img src={img} className='w-100 card__image' alt="Student Image" />
                }
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title">{name}</h3>
                        </div>
                    </div>
                    <p className="card__description pb-2 fs-3">{className}</p>
                    <p className="card__description pb-2 fs-3">{batch.toUpperCase()}</p>
                    <p className="card__description pb-2 fs-3">{group.toUpperCase()}</p>
                    <div className="row justify-content-center">
                        <div className='col-6 d-flex flex-column justify-content-center'>
                            <Button onClick={() => updateStudent()} className='mb-2'>Update {name}'s Profile</Button>
                            <Button variant="primary" className='mb-3' onClick={() => setModalShow(true)}>
                                Delete {name}'s Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div >
    );
};

export default SingleStudent;