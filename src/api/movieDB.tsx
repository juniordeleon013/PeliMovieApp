import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '506b30ca6052ba95cdff218d1944747b',
        language: 'es-ES'
    }
});

export default movieDB