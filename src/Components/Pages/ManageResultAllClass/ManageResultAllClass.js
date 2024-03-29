import React from 'react';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import './ManageResultAllClass.css';

const ManageResultAllClass = () => {

	const navigate = useNavigate();
	const goTomanage = (obj) => {
        let subjectObj = [{
            className: obj.className, batch: obj.batch, group: obj.group
        }];
        // console.log(subjectObj);
        navigate(`/manageResultsAllSubjects/${subjectObj[0].className}/${subjectObj[0].batch}/${subjectObj[0].group}`);
    }

	return (
		<div data-aos='fade-left' className='p-5'>
			<HelmetTitle title={`Manage Results`}></HelmetTitle>
			<section class="hero-section p-0">
				<div class="card-grid-ManageUsersByClass">
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "5", batch: "bangla", group: "under9" })}>							<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 5 Bangla</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "5", batch: "english", group: "under9" })}>
						<div class="card__background">

						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 5 English</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "6", batch: "bangla", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 6 Bangla</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "6", batch: "english", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 6 English</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "7", batch: "bangla", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 7 Bangla</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "7", batch: "english", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 7 English</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "8", batch: "bangla", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 8 Bangla</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "8", batch: "english", group: "under9" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 8 English</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "9", batch: "bangla", group: "science" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 9 Bangla Science</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "9", batch: "english", group: "science" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 9 English Science</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "10", batch: "bangla", group: "science" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 10 Bangla Science</h3>
						</div>
					</button>
					<button className="card-blur-class bg-transparent" onClick={() => goTomanage({ className: "10", batch: "english", group: "science" })}>
						<div class="card__background"></div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Class 10 English Science</h3>
						</div>
					</button>
				</div>
			</section>
		</div>
	);
};

export default ManageResultAllClass;