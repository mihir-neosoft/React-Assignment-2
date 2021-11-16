import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import TopNavBar from '../TopNavBar';
import { useNavigate } from 'react-router';

export default function CourseList(props) {

    const url = "http://localhost:3002/courses";
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(url).then(response => setCourses(response.data)).catch(error => console.log(error));
    }, []);

    function handleReadMore() {
        console.log("handleReadMore");
    }
    function handleInquiry(inquiry) {
        console.log("handleInquiry");
        console.log(inquiry);
        // navigate(`/InquiryForm/${inquiry}`);
        navigate(`/InquiryForm`);
    }

    return (
        <>
            <TopNavBar title={props.title} />
            <Container fluid className="main">
                <h2>{props.title}</h2>
                <Row>
                    {courses.map((course) =>
                        <Col >
                            <Card style={{ width: '28rem', marginTop: "1rem" }}>
                                <Card.Img variant="top" src={course.image} height="300rem" />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Author: {course.author}</ListGroupItem>
                                    <ListGroupItem>Rating: {course.rating}</ListGroupItem>
                                    <ListGroupItem>Price: {course.price}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="primary" onClick={() => handleReadMore()}>Read More</Button>
                                    <Button variant="primary" onClick={() => handleInquiry(course.name)}>Inquiry</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}
