import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../../Hooks/useAdmin';


const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const userSignOut = () => {
        localStorage.removeItem("studentObj");
        localStorage.removeItem("studentObj1");
        localStorage.removeItem("singleClass");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("updateStudent");
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='nav-bg mb-4' sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="me-4 navLink" to="/">Home</CustomLink>
                        {
                            user && <>
                                <CustomLink className="me-4 navLink" to="/subjects">My Subjects</CustomLink>
                                <CustomLink className="me-4 navLink" to="/myQuiz">My Quiz</CustomLink>
                                <CustomLink className="me-4 navLink" to="/myResults">My Results</CustomLink>
                                <CustomLink className="me-4 navLink" to="/myNotice">My Notice</CustomLink>
                            </>
                        }
                        {
                            admin && <CustomLink className="me-4 navLink" to="/manage">Manage NTH</CustomLink>
                        }
                        {
                            !user ? <>
                                <CustomLink className="me-4 navLink" to="/signup">Sign Up</CustomLink>
                                <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
                                :
                                <>
                                    <CustomLink className="me-4 navLink" to="/user">{user?.displayName}</CustomLink>
                                    <button className="navLink border-0 text-center bg-transparent text-start p-0" onClick={userSignOut}>Sign Out</button></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;