import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
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
import useAdmin from './Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import RequireAdmin from './Components/Shared/RequireAdmin/RequireAdmin';
import Notice from './Components/Pages/Notice/Notice';
import MyNotice from './Components/Pages/My Notice/MyNotice';
import MyIndividualNotice from './Components/Pages/My Individual Notice/MyIndividualNotice';
import AddNotice from './Components/Pages/Add Notice/AddNotice';
import ManageNotice from './Components/Pages/Manage Notice/ManageNotice';
import ManageIndividualNotice from './Components/Pages/Manage Individual Notice/ManageIndividualNotice';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/subjects' element={<RequireAuth>
          <AllSubjects></AllSubjects>
        </RequireAuth>}></Route>
        <Route path='/myNotice' element={<RequireAuth>
          <MyNotice></MyNotice>
        </RequireAuth>}></Route>
        <Route path='/myIndividualNotice' element={<RequireAuth>
          <MyIndividualNotice></MyIndividualNotice>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAdmin>
          <Manage></Manage>
        </RequireAdmin>}></Route>
        <Route path='/manageUsers' element={<RequireAdmin>
          <ManageUsersByClass></ManageUsersByClass>
        </RequireAdmin>}></Route>
        <Route path='/manageIndividualClass' element={<ManageInvididualClass></ManageInvididualClass>}></Route>
        <Route path='/managesingleStudent' element={<SingleStudent></SingleStudent>}></Route>
        <Route path='/individualSubject/:subjectName' element={<IndividualSubjectVideos></IndividualSubjectVideos>}></Route>
        <Route path='/subjectVideos' element={<SingleSubjectVideos></SingleSubjectVideos>}></Route>
        <Route path='/singleSubjectVideo' element={<SingleSubjectVideo></SingleSubjectVideo>}></Route>
        <Route path='/addTasks' element={<RequireAdmin>
          <AddTasks></AddTasks>
        </RequireAdmin>}></Route>
        <Route path='/Notice' element={<RequireAdmin>
          <Notice></Notice>
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
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
