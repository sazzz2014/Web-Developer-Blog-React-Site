import React, { Component } from 'react';
import { Container, Row, Tab, Nav, Col } from 'react-bootstrap';
import pexels1 from '../Assets/pexels-1.jpg';
import pexels2 from '../Assets/pexels-2.jpg';
import pexels3 from '../Assets/pexels-3.jpg';
import pexels4 from '../Assets/pexels-4.jpg';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variat="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Girl</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Cake</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Street</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Girl 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={pexels1} width="600px" height="500px" />
                                    <p>Girl</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <img src={pexels2} width="600px" height="500px" />
                                    <p>Cake</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                    <img src={pexels3} width="600px" height="500px" />
                                    <p>Street</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fourth">
                                    <img src={pexels4} width="600px" height="500px" />
                                    <p>Girl 2</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container >
        );
    }
}