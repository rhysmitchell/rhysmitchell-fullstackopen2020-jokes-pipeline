import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import JokeForm from './components/JokeForm'
import jokeService from './services/jokes'
import './App.css';

const App = () => {
  const [jokeIncrement, setJokeIncrement] = useState(0);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    jokeService.getRandomJoke().then(joke => setJoke(joke))
  }, [jokeIncrement])

  return (
    <Container>
      <Row>
        <Col>
          <JokeForm
            joke={joke}
            jokeIncrement={jokeIncrement}
            setJokeIncrement={setJokeIncrement}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;