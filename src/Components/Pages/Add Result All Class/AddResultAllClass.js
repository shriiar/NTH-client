import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddResultAllClass = () => {
    const navigate = useNavigate();

    const goToClass = (obj) => {
        let subjectObj = [{
            className: obj.className, batch: obj.batch, group: obj.group
        }];
        console.log(subjectObj);
        navigate(`/addResultIndividualClassQuery/${subjectObj[0].className}/${subjectObj[0].batch}/${subjectObj[0].group}`);
    }
    const goTomanage = (obj) => {
        let subjectObj = [{
            className: obj.className, batch: obj.batch, group: obj.group
        }];
        console.log(subjectObj);
        navigate(`/manageResultsAllSubjects/${subjectObj[0].className}/${subjectObj[0].batch}/${subjectObj[0].group}`);
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div className='p-3'>
                <h2>Class 5 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "5", batch: "bangla", group: "under9" })}>Add Result For Class 5</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "5", batch: "bangla", group: "under9" })}>Manage Result For Class 5</Button>
                    </div>

                </div>
            </div>
            <div className='p-3'>
                <h2>Class 5 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "5", batch: "english", group: "under9" })}>Add Result For Class 5</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "5", batch: "english", group: "under9" })}>Manage Result For Class 5</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 6 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "6", batch: "bangla", group: "under9" })}>Add Result For Class 5</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "6", batch: "bangla", group: "under9" })}>Manage Result For Class 5</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 6 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "6", batch: "english", group: "under9" })}>Add Result For Class 6</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "6", batch: "english", group: "under9" })}>Manage Result For Class 6</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 7 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "7", batch: "bangla", group: "under9" })}>Add Result For Class 7</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "7", batch: "bangla", group: "under9" })}>Manage Result For Class 7</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 7 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "7", batch: "english", group: "under9" })}>Add Result For Class 7</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "7", batch: "english", group: "under9" })}>Manage Result For Class 7</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 8 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "8", batch: "bangla", group: "under9" })}>Add Result For Class 8</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "8", batch: "bangla", group: "under9" })}>Manage Result For Class 8</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 8 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "8", batch: "english", group: "under9" })}>Add Result For Class 8</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "8", batch: "english", group: "under9" })}>Manage Result For Class 8</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 9 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "science" })}>Add Result For Class 9 Science</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "9", batch: "bangla", group: "science" })}>Manage Result For Class 9 Science</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 9 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "9", batch: "english", group: "science" })}>Add Result For Class 9 Science</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "9", batch: "english", group: "science" })}>Manage Result For Class 9 Science</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 9 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "commerce" })}>Add Result For Class 9 Commerce</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "9", batch: "bangla", group: "commerce" })}>Manage Result For Class 9 Commerce</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 9 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "9", batch: "english", group: "commerce" })}>Add Result For Class 9 Commerce</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "9", batch: "english", group: "commerce" })}>Manage Result For Class 9 Commerce</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 10 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "science" })}>Add Result For Class 10 Science</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "10", batch: "bangla", group: "science" })}>Manage Result For Class 10 Science</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 10 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "10", batch: "english", group: "science" })}>Add Result For Class 10 Science</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "10", batch: "english", group: "science" })}>Manage Result For Class 10 Science</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 10 Bangla</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "commerce" })}>Add Result For Class 10 Commerce</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "10", batch: "bangla", group: "commerce" })}>Manage Result For Class 10 Commerce</Button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2>Class 10 English</h2>
                <div className='row'>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goToClass({ className: "10", batch: "english", group: "commerce" })}>Add Result For Class 10 Commerce</Button>
                    </div>
                    <div className="col-12 mb-2">
                        <Button onClick={() => goTomanage({ className: "10", batch: "english", group: "commerce" })}>Manage Result For Class 10 Commerce</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddResultAllClass;