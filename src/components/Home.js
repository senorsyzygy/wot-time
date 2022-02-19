import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import React,{ useEffect, useRef, useState } from "react";

export default function Home() {

    return(
        <Container className="homeContainer">
            <Row className="home-header">
                <h1 className="header-title">If you know where you need to go click on the correct button</h1>
            </Row>
            <Row className="home-buttons">
                <Col>
                    <Button href="/battleform" variant="primary">I know my battles</Button>
                </Col>
                <Col>
                    <Button href="/userform" variant="secondary">I don't know my battles</Button>
                </Col>
            </Row>
        </Container>
    )
}