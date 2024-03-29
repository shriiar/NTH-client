import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Sign Up/Signup';
import RequireAuth from './Components/Shared/RequiredAuth/RequiredAuth';
import AllSubjects from './Components/Pages/All Subjects/AllSubjects';
import Manage from './Components/Pages/Manage/Manage';
import AddTasks from './Components/Pages/Add Tasks/AddTasks';
import IndividualSubjectVideos from './Components/Pages/Individual Subject Videos/IndividualSubjectVideos';
import SingleSubjectVideos from './Components/Pages/Single Subject Videos/SingleSubjectVideos';
import SingleSubjectVideo from './Components/Pages/Single Subject Video/SingleSubjectVideo';
import ManageUsersByClass from './Components/Pages/Manage Users By Class/ManageUsersByClass';
import ManageInvididualClass from './Components/Pages/Manage Invididual Class/ManageInvididualClass';
import SingleStudent from './Components/Pages/Single Student/SingleStudent';
import Home from './Components/Shared/Home/Home';
import RequireAdmin from './Components/Shared/RequireAdmin/RequireAdmin';
import Notice from './Components/Pages/Notice/Notice';
import MyNotice from './Components/Pages/My Notice/MyNotice';
import MyIndividualNotice from './Components/Pages/My Individual Notice/MyIndividualNotice';
import AddNotice from './Components/Pages/Add Notice/AddNotice';
import ManageNotice from './Components/Pages/Manage Notice/ManageNotice';
import ManageIndividualNotice from './Components/Pages/Manage Individual Notice/ManageIndividualNotice';
import UpdateStudent from './Components/Pages/Update Student/UpdateStudent';
import ExamsResults from './Components/Pages/Exams Results/ExamsResults';
import SetExams from './Components/Pages/Set Exams/SetExams';
import Exams from './Components/Pages/Exams/Exams';
import MyQuiz from './Components/Pages/My Quiz/MyQuiz';
import MAllExams from './Components/Pages/MAllExams/MAllExams';
import ResultsForClass from './Components/Pages/Results For Class/ResultsForClass';
import AddResultAllClass from './Components/Pages/Add Result All Class/AddResultAllClass';
import AddResultIndividualClass from './Components/Pages/Add Result Individual Class/AddResultIndividualClass';
import AddStudentResult from './Components/Pages/Add Student Result/AddStudentResult';
import AllSubjectsResults from './Components/Pages/All Subjects Results/AllSubjectsResults';
import IndividualSubjectAllResults from './Components/Pages/Individual Subject All Results/IndividualSubjectAllResults';
import TaskRecords from './Components/Pages/Task Records/TaskRecords';
import MyResultsSingleSubject from './Components/Pages/My Results Single Subject/MyResultsSingleSubject';
import Student from './Components/Pages/Student/Student';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import ManageTasks from './Components/Pages/Manage Tasks/ManageTasks';
import ManageIndividualClassByTask from './Components/Pages/Manage Individual Class By Task/ManageIndividualClassByTask';
import SingleAllSubjectResults from './Components/Pages/Single All Subject Results/SingleAllSubjectResults';
import SingleSubjectTasks from './Components/Pages/Single Subject Tasks/SingleSubjectTasks';
import CheckPayment from './Components/Pages/Check Payment/CheckPayment';
import ManageIndividualClassPayment from './Components/Pages/Manage Individual Class Payment/ManageIndividualClassPayment';
import DueMessage from './Components/Shared/Due Message/DueMessage';
import AddResultIndividualClassQuery from './Components/Pages/AddResultIndividualClassQuery/AddResultIndividualClassQuery';
import { signOut } from 'firebase/auth';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Components/Shared/Footer/Footer';
import ExpandedNotice from './Components/Pages/Expanded Notice/ExpandedNotice';
import ManageResultAllClass from './Components/Pages/ManageResultAllClass/ManageResultAllClass';
import InsertID from './Components/Pages/InsertID/InsertID';
import UpdateResult from './Components/Pages/Update Result/UpdateResult';
import StudentID from './Components/Pages/StudentID/StudentID';
import ManageID from './Components/Pages/ManageID/ManageID';
import AddImage from './Components/Pages/AddImage/AddImage';
import AdminImage from './Components/Pages/AdminImage/AdminImage';
import ManageImages from './Components/Pages/ManageImages/ManageImages';
import PinnedPosts from './Components/Pages/PinnedPosts/PinnedPosts';
import AddPinnedPost from './Components/Pages/AddPinnedPost/AddPinnedPost';
import ManagePinnedPost from './Components/Pages/ManagePinnedPost/ManagePinnedPost';
import ShowPinnedPost from './Components/Shared/ShowPinnedPost/ShowPinnedPost';


function App() {

	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	return (
		<div className="App">
			<Header></Header>
			<DueMessage></DueMessage>
			<ShowPinnedPost></ShowPinnedPost>
			<Routes>
				<Route path='/subjects' element={<RequireAuth>
					<AllSubjects></AllSubjects>
				</RequireAuth>}></Route>
				<Route path='/myNotice' element={<RequireAuth>
					<MyNotice student={student}></MyNotice>
				</RequireAuth>}></Route>
				<Route path='/myQuiz' element={<RequireAuth>
					<MyQuiz student={student}></MyQuiz>
				</RequireAuth>}></Route>
				<Route path='/myResults/:subject' element={<RequireAuth>
					<MyResultsSingleSubject student={student}></MyResultsSingleSubject>
				</RequireAuth>}></Route>
				<Route path='/myIndividualNotice' element={<RequireAuth>
					<MyIndividualNotice></MyIndividualNotice>
				</RequireAuth>}></Route>
				<Route path='/student' element={<RequireAuth>
					<Student></Student>
				</RequireAuth>}></Route>


				<Route path='/manage' element={<RequireAdmin>
					<Manage></Manage>
				</RequireAdmin>}></Route>

				<Route path='/manage' element={<RequireAuth>
					<Manage></Manage></RequireAuth>}>

					<Route path='manageUsers' element={<RequireAdmin>
						<ManageUsersByClass></ManageUsersByClass>
					</RequireAdmin>}></Route>

					<Route path='taskRecords' element={<RequireAdmin>
						<TaskRecords></TaskRecords>
					</RequireAdmin>}></Route>

					<Route path='Notice' element={<RequireAdmin>
						<Notice></Notice>
					</RequireAdmin>}></Route>

					<Route path='examsResults' element={<RequireAdmin>
						<ExamsResults></ExamsResults>
					</RequireAdmin>}></Route>

					<Route path='checkPayment' element={<RequireAdmin>
						<CheckPayment></CheckPayment>
					</RequireAdmin>}></Route>

					<Route path='studentID' element={<RequireAdmin>
						<StudentID></StudentID>
					</RequireAdmin>}></Route>

					<Route path='adminImage' element={<RequireAdmin>
						<AdminImage></AdminImage>
					</RequireAdmin>}></Route>

					<Route path='pinnedPosts' element={<RequireAdmin>
						<PinnedPosts></PinnedPosts>
					</RequireAdmin>}></Route>

				</Route>

				<Route path='/myNotice' element={<RequireAuth>
					<MyNotice></MyNotice></RequireAuth>}>

					<Route path='expandedNotice/:_id' element={<RequireAuth>
						<ExpandedNotice></ExpandedNotice>
					</RequireAuth>}></Route>

				</Route>

				<Route path='/manageIndividualClass/:className/:batch/:group' element={<ManageInvididualClass></ManageInvididualClass>}></Route>
				<Route path='/managesingleStudent' element={<SingleStudent></SingleStudent>}></Route>
				<Route path='/individualSubject/:className/:batch/:group/:subject' element={<IndividualSubjectVideos student={student}></IndividualSubjectVideos>}></Route>
				<Route path='/subjectVideos' element={<SingleSubjectVideos></SingleSubjectVideos>}></Route>
				<Route path='/singleSubjectVideo' element={<SingleSubjectVideo></SingleSubjectVideo>}></Route>
				<Route path='/addTasks' element={<RequireAdmin>
					<AddTasks></AddTasks>
				</RequireAdmin>}></Route>
				<Route path='/manageTask' element={<RequireAdmin>
					<ManageTasks></ManageTasks>
				</RequireAdmin>}></Route>
				<Route path='/manageIndividualClassByTask/:className/:batch/:group' element={<RequireAdmin>
					<ManageIndividualClassByTask></ManageIndividualClassByTask>
				</RequireAdmin>}></Route>
				<Route path='/subjectTasks/:className/:batch/:group/:subject' element={<RequireAdmin>
					<SingleSubjectTasks></SingleSubjectTasks>
				</RequireAdmin>}></Route>
				<Route path='/addNotice' element={<RequireAdmin>
					<AddNotice></AddNotice>
				</RequireAdmin>}></Route>
				<Route path='/manageNotice' element={<RequireAdmin>
					<ManageNotice></ManageNotice>
				</RequireAdmin>}></Route>
				<Route path='/manageIndividualNotice' element={<RequireAdmin>
					<ManageIndividualNotice></ManageIndividualNotice>
				</RequireAdmin>}></Route>
				<Route path='/updateStudent/:email/:id' element={<RequireAdmin>
					<UpdateStudent></UpdateStudent>
				</RequireAdmin>}></Route>
				<Route path='/exams' element={<RequireAdmin>
					<Exams></Exams>
				</RequireAdmin>}></Route>
				<Route path='/setExams' element={<RequireAdmin>
					<SetExams></SetExams>
				</RequireAdmin>}></Route>
				<Route path='/ManageExams' element={<RequireAdmin>
					<MAllExams></MAllExams>
				</RequireAdmin>}></Route>
				<Route path='/results' element={<RequireAdmin>
					<ResultsForClass></ResultsForClass>
				</RequireAdmin>}></Route>
				<Route path='/addResultAllClass' element={<RequireAdmin>
					<AddResultAllClass></AddResultAllClass>
				</RequireAdmin>}></Route>
				<Route path='/manageResultAllClass' element={<RequireAdmin>
					<ManageResultAllClass></ManageResultAllClass>
				</RequireAdmin>}></Route>
				<Route path='/addResultIndividualClassQuery/:className/:batch/:group' element={<RequireAdmin>
					<AddResultIndividualClassQuery></AddResultIndividualClassQuery>
				</RequireAdmin>}></Route>
				<Route path='/addResultIndividualClass/:className/:batch/:group' element={<RequireAdmin>
					<AddResultIndividualClass></AddResultIndividualClass>
				</RequireAdmin>}></Route>
				<Route path='/addStudentResult/:email' element={<RequireAdmin>
					<AddStudentResult></AddStudentResult>
				</RequireAdmin>}></Route>
				<Route path='/manageResultsAllSubjects/:className/:batch/:group' element={<RequireAdmin>
					<AllSubjectsResults></AllSubjectsResults>
				</RequireAdmin>}></Route>
				<Route path='/updateResult/:_id' element={<RequireAdmin>
					<UpdateResult></UpdateResult>
				</RequireAdmin>}></Route>
				<Route path='/individualAllSubjectResults/:className/:batch/:group/:subject' element={<RequireAdmin>
					<IndividualSubjectAllResults></IndividualSubjectAllResults>
				</RequireAdmin>}></Route>
				<Route path='/manageIndividualClassPayment/:className/:batch/:group' element={<RequireAdmin>
					<ManageIndividualClassPayment></ManageIndividualClassPayment>
				</RequireAdmin>}></Route>
				<Route path='/insertID' element={<RequireAdmin>
					<InsertID></InsertID>
				</RequireAdmin>}></Route>
				<Route path='/manageID' element={<RequireAdmin>
					<ManageID></ManageID>
				</RequireAdmin>}></Route>
				<Route path='/addImage' element={<RequireAdmin>
					<AddImage></AddImage>
				</RequireAdmin>}></Route>
				<Route path='/manageImages' element={<RequireAdmin>
					<ManageImages></ManageImages>
				</RequireAdmin>}></Route>
				<Route path='/addPinnedPost' element={<RequireAdmin>
					<AddPinnedPost></AddPinnedPost>
				</RequireAdmin>}></Route>
				<Route path='/managePinnedPosts' element={<RequireAdmin>
					<ManagePinnedPost></ManagePinnedPost>
				</RequireAdmin>}></Route>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/signup' element={<Signup></Signup>}></Route>

			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
