import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Exams.css'

const Exams = () => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div>
            <section class="hero-section">
                <div class="card-grid-Exams mx-auto">
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Set Exams</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/setExams')}>Add</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Manage Exams</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/ManageExams')}>Manage</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exams;