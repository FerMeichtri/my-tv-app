import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const ShowCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="dark">Ver mas...</Button>
      </Card.Body>
    </Card>
  )
}