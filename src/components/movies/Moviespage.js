import React, { useState, useEffect, } from 'react';
import {Container, Row} from 'reactstrap'
import Axios from 'axios';
import Movies from './Movies'


const MoviesPage = () => {

  const [movies, setMovie] = useState([])

  useEffect(() => {
    getMovie()
  }, [])

  const getMovie = () => {
    Axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      .then(response => setMovie(response.data.movies))
  }


  console.log(movies)
  return (

    <div className="App">
      <Container>
        <Row>
          {movies.map(e => (
            <Movies key={e.id} title={e.title} director={e.director} image={e.posterUrl} />
          ))}
          </Row>
          </Container>
    </div>


      );
    }
    
    export default MoviesPage;
