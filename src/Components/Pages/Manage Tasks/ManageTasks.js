import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageTasks = () => {

    const navigate = useNavigate();

    const goToClass = (obj) => {
        let subjectObj = [{
            className: obj.className, batch: obj.batch, group: obj.group
        }];
        navigate(`/manageIndividualClassByTask/${obj?.className}/${obj?.batch}/${obj?.group}`);
    }
    const goTo = (obj) => {
        let subjectObj = [{
            className: obj.className, batch: obj.batch, group: obj.group
        }];
        navigate(`/manageIndividualClass/${subjectObj[0]?.className}/${subjectObj[0]?.batch}/${subjectObj[0]?.group}`);
    }
    return (
        <div>
            <section class="hero-section p-0">
                <div class="card-grid-ManageUsersByClass">
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 5 Bangla</h3>
                            <Button onClick={() => goToClass({ className: "5", batch: "bangla", group: "under9" })}>Manage Class 5</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background">

                        </div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 5 English</h3>
                            <Button onClick={() => goToClass({ className: "5", batch: "english", group: "under9" })}>Manage Class 5</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 6 Bangla</h3>
                            <Button onClick={() => goToClass({ className: "6", batch: "bangla", group: "under9" })}>Manage Class 6</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 6 English</h3>
                            <Button onClick={() => goToClass({ className: "6", batch: "english", group: "under9" })}>Manage Class 6</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 7 Bangla</h3>
                            <Button onClick={() => goToClass({ className: "7", batch: "bangla", group: "under9" })}>Manage Class 7</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 7 English</h3>
                            <Button onClick={() => goToClass({ className: "7", batch: "english", group: "under9" })}>Manage Class 7</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 8 Bangla</h3>
                            <Button onClick={() => goToClass({ className: "8", batch: "bangla", group: "under9" })}>Manage Class 8</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 8 English</h3>
                            <Button onClick={() => goToClass({ className: "8", batch: "english", group: "under9" })}>Manage Class 8</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 9 Bangla Science</h3>
                            <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "science" })}>Manage Class 9 Science</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 9 English Science</h3>
                            <Button onClick={() => goToClass({ className: "9", batch: "english", group: "science" })}>Manage Class 9 Science</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 9 Bangla Commerce</h3>
                            <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "commerce" })}>Manage Class 9 Commerce</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 9 English Commerce</h3>
                            <Button onClick={() => goToClass({ className: "9", batch: "english", group: "commerce" })}>Manage Class 9 Commerce</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 10 Bangla Science</h3>
                            <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "science" })}>Manage Class 10 Science</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 10 English Science</h3>
                            <Button onClick={() => goToClass({ className: "10", batch: "english", group: "science" })}>Manage Class 10 Science</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 10 Bangla Commerce</h3>
                            <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "commerce" })}>Manage Class 10 Commerce</Button>
                        </div>
                    </div>
                    <div class="card-blur-class">
                        <div class="card__background"></div>
                        <div class="card__content d-flex flex-column">
                            <h3 class="card__heading">Class 10 English Commerce</h3>
                            <Button onClick={() => goToClass({ className: "10", batch: "english", group: "commerce" })}>Manage Class 10 Commerce</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default ManageTasks;