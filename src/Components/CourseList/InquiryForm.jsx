import React, { useEffect, useState } from 'react';
import TopNavBar from '../TopNavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function InquiryForm(props) {

    const url = "http://localhost:3002/";
    const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const regForName = RegExp(/^[A-Za-z]/);
    const regForMobile = RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [values, setValues] = useState({
        name: "", 
        email: "", 
        mobile: "", 
        course: "", 
        query: "",
    })
    const [verrors, setVerrors] = useState({ 
        name: "", 
        email: "", 
        mobile: "", 
        query: "",
     })

    useEffect(() => {
        axios.get(url + "courses").then(response => setCourses(response.data)).catch(error => console.log(error));
        // axios.get(url+"inquiry").then(response => setInquiry(response.data)).catch(error => console.log(error));        
    }, []);

    // function handleChange(event) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        let errors = verrors;
        switch (name) {
            case "name":
                errors.name = regForName.test(value) ? "" : 'Enter Valid first Name';
                break;

            case "email":
                errors.email = regForEmail.test(value) ? "" : 'Enter Valid Email';
                break;

            case "mobile":
                errors.mobile = regForMobile.test(value) ? "" : 'Enter Valid Mobile number';
                break;

            case "query":
                errors.query = (value !== "") ? "" : 'Enter your query';
                break;

        }
        setValues(values => ({...values,[name]: value}));
        // setVerrors({errors, [name]: value });

    }
    const handleValidate = (errors) => {
        let validate = (errors.name === "" && errors.email === "" && errors.mobile === "" && errors.query === "") ? true : false;
        return validate;

    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (handleValidate(verrors)) {
            if (values.name !== "" && values.email !== "" && values.mobile !== "" && values.query !== "") {
                console.log(values);
                axios.post(url + "inquiry",values);
                alert("successful");
                navigate("/CourseList")
            } else {
                alert("fields are empty");
            }
        } else {
            alert("enter valid details");
        }
    }
    return (
        <>
            <TopNavBar title={props.title} />
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter Name" />
                        {verrors.name.length > 0 && <span>{verrors.name}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name="email" onChange={handleChange} placeholder="Enter Email" />
                        {verrors.email.length > 0 && <span>{verrors.email}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="text" name="mobile" onChange={handleChange} placeholder="Enter Mobile Number" />
                        {verrors.mobile.length > 0 && <span>{verrors.mobile}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Inquiry For Course</Form.Label>
                        <Form.Control as="select" name="course" onChange={handleChange} defaultValue={props.inquiry}>
                            {courses.map((course) =>
                                <option>{course.name}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Query</Form.Label>
                        <Form.Control as="textarea" rows="4" name="query" onChange={handleChange} placeholder="Enter Your Query" />
                        {verrors.query.length > 0 && <span>{verrors.query}</span>}
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}
