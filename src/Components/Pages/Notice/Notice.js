import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Notice.css';

const Notice = () => {
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div className=''>
            <section class="hero-section">
                <div class="card-grid-TaskRecords">
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Add Notice</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/addNotice')}>Add</Button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Manage Notice</h3>
                            <Button className='w-50 mx-auto' onClick={() => goTo('/manageNotice')}>Manage</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notice;