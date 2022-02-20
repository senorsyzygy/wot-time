import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import React,{ useEffect, useRef, useState } from "react";
import { ApiClient } from './ApiClient'

export default function UserForm() {
    const [query,setQuery] = useState("")
    const [calc,setCalc] = useState("")
    const apiClient = new ApiClient();
    //gets the account id from first get function then uses that account id for second get function
    const handleSubmit = (e) => {
        e.preventDefault()
        const accSearch = query
        apiClient.getPlaytime(accSearch)
        .then((res) => {
            const accountId = res.data[0].account_id
            apiClient.getUserPlaytime(accountId)
            .then((res) => {
                const response = res.data[`${accountId}`].statistics.all.battles
                setCalc(Math.round(((response * 7) / 60)))
            })
        })
    }
    return(
        <Container>
            <Row className="formCalc">
                <Col>
                    <Form id="idsearch" onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Type your nickname in below! (EU players only)</Form.Label>
                            <Form.Control type="text" placeholder="Nickname" name="userinput" value={query} onChange={e => setQuery(e.target.value)} ara-describedby="userHelp"/>
                            <Form.Text id="userHelp" muted>Put in the nickname you use to login to automatically calculate your hours from total battles</Form.Text>
                        </Form.Group>
                        <Button color="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="formResult">
                <Col>
                    {calc != "" ? <><h5 className="timeOutput">You have played {calc} hours!</h5></> : <><h5 className="timeOutput">Put in your username to find out your hours</h5></>}
                </Col>
            </Row>
        </Container>
    )
}