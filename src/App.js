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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/subjects' element={<RequireAuth>
          <AllSubjects></AllSubjects>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
        <Route path='/manageUsers' element={<ManageUsersByClass></ManageUsersByClass>}></Route>
        <Route path='/manageIndividualClass' element={<ManageInvididualClass></ManageInvididualClass>}></Route>
        <Route path='/managesingleStudent' element={<SingleStudent></SingleStudent>}></Route>
        <Route path='/individualSubject/:subjectName' element={<IndividualSubjectVideos></IndividualSubjectVideos>}></Route>
        <Route path='/subjectVideos' element={<SingleSubjectVideos></SingleSubjectVideos>}></Route>
        <Route path='/singleSubjectVideo' element={<SingleSubjectVideo></SingleSubjectVideo>}></Route>
        <Route path='/addTasks' element={<AddTasks></AddTasks>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
