import React from 'react';
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

export default function Home() {
    const navigate = useNavigate();
    return (
        <Container fluid className="home">
            <h1>React Assignment</h1>
            <br/>
            <Button variant="primary" onClick={() => navigate("/ProductList")}>product list</Button>
            <Button variant="primary" onClick={() => navigate("/CourseList")}>Course List</Button>
            <Button variant="primary" onClick={() => navigate("/InquiryForm")}>Inquiry Form</Button>
            <Button variant="primary" onClick={() => navigate("/DisplayQuery")}>Display Querries</Button>
        </Container>
    )
}
