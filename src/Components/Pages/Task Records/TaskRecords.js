import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TaskRecords.css';

const TaskRecords = () => {
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
                            <h3 class="card__heading">Add Tasks</h3>
                            <button className='w-50 mx-auto' onClick={() => goTo('/addTasks')}>Add</button>
                        </div>
                    </div>
                    <div class="card-blur">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading text-center">Manage Tasks</h3>
                            <button className='w-50 mx-auto' onClick={() => goTo('/manageTask')}>Manage</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaskRecords;