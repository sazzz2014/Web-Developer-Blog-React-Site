import React, { Component } from 'react';
import { CardDeck, CardGroup, Container, Card, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardGroup className="m-4">
                        <Card className="m-4" border="success">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card className="m-4" bg="success">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                        </Card>
                        <Card className="m-4" bg="warning" text="primary">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </Container>
            </>
        );
    }
}