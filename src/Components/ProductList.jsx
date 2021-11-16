import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import TopNavBar from './TopNavBar';

export default function ProductList(props) {
    const url = "http://localhost:3002/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url).then(response => setProducts(response.data)).catch(error => console.log(error));
    }, []);
    function handleBuyNow(id) {
        console.log("Product id "+id+" is added");
    }
    return (
        <>
            <TopNavBar title={props.title}/>
            <Container fluid className="main">
                <h2>{props.title}</h2>
                <Row>
                    {products.map((product) =>
                        <Col >
                            <Card key={product.id} style={{ width: '20rem', marginTop: '1rem' }}>
                                <Card.Img variant="top" src={product.image} height="200px" />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        <p>{product.description}...
                                            <br />Quauntity: {product.quantity} Price: ${product.price}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>handleBuyNow(product.id)}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>

        </>
    )
}
