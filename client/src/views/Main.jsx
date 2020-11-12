import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = props => {
    const [joke, setJoke] = useState({});
    const [reveal, setReveal] = useState(false)
    const [reset, setReset] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes/random")
            .then(res => setJoke(res.data.joke))
    }, [reset])

    const revealJoke = () => {
        setReveal(true);
    }

    const newJoke = () => {
        setReset(reset+1);
        setReveal(false);
    }
    return(
        <div>
            <h1 className="jumbotron">Let me tell you a joke....</h1>
            <h3>{joke.setup}</h3>
            {
                reveal ?
                <>
                <h4>{joke.punchline}</h4>
                <button onClick={newJoke} className="btn btn-info">Give me another!</button>
                </>
                :
                <button onClick={revealJoke} className="btn btn-info">Reveal Joke</button>
            }
            
        </div>
    )
}

export default Main;