import axios from "axios";

const Url = "https://mock-api.driven.com.br/api/v4/cineflex";

function getMovies() {
    axios.get(`${Url}/movies`)
}

function getSessions(idMovie) {
    axios.get(`${Url}/movies/${idMovie}/showtimes`)
}

function getSeats(idSession) {
    axios.get(`${Url}/showtimes/${idSession}/seats`)
}

function postSeats(data) {
    axios.post(`${Url}/seats/book-many`, data)
}

export {
    getMovies,
    getSessions,
    getSeats,
    postSeats
};