import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router'

export default function TopNavBar(props) {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate("/ProductList")}>Products</Nav.Link>
                    <Nav.Link onClick={() => navigate("/CourseList")}>Courses</Nav.Link>
                    <Nav.Link onClick={() => navigate("/DisplayQuery")}>Display Querries</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Login</Nav.Link>
                    <Nav.Link>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
