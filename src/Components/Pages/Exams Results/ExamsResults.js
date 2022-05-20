import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExamsResults = () => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div>
            <section class="hero-section">
                <div class="card-grid-TaskRecords">
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Add Manage Exams</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/exams')}>Exams</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Add Manage Results</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/addResultAllClass')}>Results</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExamsResults;