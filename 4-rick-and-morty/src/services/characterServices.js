import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api"

const getCharacters = async (nombre, page) => axios.get(`${BASE_URL}/character?name=${nombre}&page=${page}`)

export { getCharacters }