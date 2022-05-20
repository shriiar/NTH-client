import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResultsForClass = () => {
    const navigate = useNavigate();

    const goTo = () => {
        navigate('/addResultAllClass');
    }
    const toResults = () => {
        navigate('/manageResults');
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <section class="hero-section">
                <div class="card-grid-TaskRecords">
                    <div class="card">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Add Notice</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/addResultAllClass')}>Add</Button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Manage Notice</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/manageResults')}>Manage</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResultsForClass;