import React from 'react';
import './Movies.css'
import {
  Card, CardImg,CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Movies = ({title, director, image}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{director}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Movies;