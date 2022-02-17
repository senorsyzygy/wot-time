import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import React,{ useEffect, useRef, useState } from "react";

export default function HourForm() {
    const [state,setState] = useState({
        gamesinput: 0
    })
    const handleChange = (event) => {
        const newState = {...state}
        newState[event.target.name] = event.target.value
        setState(newState)
    }
    const timeCalc = Math.round(((state.gamesinput * 7) / 60))
    return (
        <Container>
            <Row className="formCalc">
                <Form id="hourscalc">
                        <Form.Group>
                            <Form.Label>Type the amount of games you've played here!</Form.Label>
                            <Form.Control type="number" placeholder="9999" name="gamesinput" defaultValue={state.gamesinput} onChange={(e) => handleChange(e)} ara-describedby="gameHelp"/>
                            <Form.Text id="gameHelp" muted>You can find the amount of games you have played via your service record</Form.Text>
                            <br/>
                            <Form.Text id="gameHelp" muted>Your result will be auto-calculated as you type. We calculate average battle time to be 7 minutes long and we've rounded the time to the nearest hour.</Form.Text>
                        </Form.Group>
                </Form>
            </Row>
            <Row className="formResult">
                <Col>
                    <h5 className="timeOutput">{timeCalc} hours played!</h5>
                </Col>
            </Row>
        </Container>
    )
}