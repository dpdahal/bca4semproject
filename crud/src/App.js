import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import RouterComponent from "./RouterComponent";

import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <Container fluid="md">
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <Header />
                    <RouterComponent />
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default App;