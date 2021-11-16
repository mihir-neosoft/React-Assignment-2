import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import TopNavBar from '../TopNavBar';
import Container from 'react-bootstrap/Container';

export default function DisplayQuery(props) {
    const url = "http://localhost:3002/inquiry";
    const [queries, setQueries] = useState([])

    useEffect(() => {
        axios.get(url).then(response => setQueries(response.data)).catch(error => console.log(error));
    }, [])
    return (
        <Container fluid>
            <TopNavBar title={props.title} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Course</th>
                        <th>Query</th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map((query) =>
                        <tr>
                            <td>{query.name}</td>
                            <td>{query.email}</td>
                            <td>{query.mobile}</td>
                            <td>{query.course}</td>
                            <td>{query.query}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
