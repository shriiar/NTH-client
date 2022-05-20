import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Manage.css'

const Manage = () => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div>
            <section class="hero-section">
                <div class="card-grid-Manage">
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Manage All Students</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/manageUsers')}>Manage</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">All Tasks</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/taskRecords')}>Add or Manage</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">All Notices</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/Notice')}>Add or Manage</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Exams & Results</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/examsResults')}>Add or Manage</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">All Payments</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/checkPayment')}>Manage Users</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manage;