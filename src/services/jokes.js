import axios from 'axios'
const baseUrl = 'https://official-joke-api.appspot.com'

const getRandomJoke = () => {
    const request = axios.get(`${baseUrl}/random_joke`)
    return request.then((response) => {
        const joke = {
            setup: response.data.setup,
            punchline: response.data.punchline
        };
        
        return joke;
    })
}

const getTenJokes = () => {
    const request = axios.get(`${baseUrl}/jokes/ten`)
    return request.then((response) => {
        const jokes = response.data.map(joke => ({ setup: joke.setup, punchline: joke.punchline }));
        return jokes;
    })
}

export default {
    getRandomJoke,
    getTenJokes
}