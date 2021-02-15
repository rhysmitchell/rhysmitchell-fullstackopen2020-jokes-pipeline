import React, { useState } from 'react'
import { Media, Button } from 'react-bootstrap'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JokeForm = ({ joke, jokeIncrement, setJokeIncrement }) => {
    const [punchlineVisible, setPunchlineVisible] = useState(false);


    const showPunchline = (shouldShowPunchline) => {
        setPunchlineVisible(!shouldShowPunchline);
    }

    const handleGetNextJoke = () => {
        setPunchlineVisible(false);
        setJokeIncrement(jokeIncrement => jokeIncrement + 1);
    }

    if (!joke) {
        return;
    }

    return (
        <Media>
            <Media.Body>
                <h4>{joke.setup}</h4>
                <a href="#0" onClick={() => showPunchline(punchlineVisible)}>{punchlineVisible ? 'Hide' : 'Show'} Punchline...</a>

                <h5>{punchlineVisible ? joke.punchline : ''}</h5>
            </Media.Body>
            <Button variant="info" onClick={handleGetNextJoke}>
                <FontAwesomeIcon icon={faSyncAlt} />
            </Button>
        </Media>
    );
}

export default JokeForm