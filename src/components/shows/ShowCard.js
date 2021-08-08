import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const ShowCard = ({
  id,
  name,
  summary,
  image
}) => {
  // some shows do not have image
  // show a generic image for them
  const imgSrc = (!image) ? 'assets/images/tvShow.png' :  image.medium || image.original || 'assets/images/tvShow.png';

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-thumbnail' src={ imgSrc } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          {
            (!summary) ? 'No description was provided' : summary.replace(/<[^>]*>?/gm, '')
          }
        </Card.Text>
        <Button variant="dark">Ver mas</Button>
      </Card.Body>
    </Card>
  )
}