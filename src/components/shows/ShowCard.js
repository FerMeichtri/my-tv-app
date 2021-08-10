import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/ShowCard.css';

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
    <Card className='card'>
      <Card.Img variant="top" className='img-thumbnail' src={ imgSrc } />
      <Card.Body className='card-body'>
        <Card.Title>{ name }</Card.Title>
        <Card.Text className='card-text'>
            {
              (!summary) ? 'No description was provided' : summary.replace(/<[^>]*>?/gm, '')
            }
        </Card.Text>
        <Link className='btn btn-dark' to={`./shows/${id}`}>
            More info
        </Link>
      </Card.Body>
    </Card>
  )
}