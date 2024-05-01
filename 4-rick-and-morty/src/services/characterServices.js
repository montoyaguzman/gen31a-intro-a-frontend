import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api"

const getCharacters = async () => axios.get(`${BASE_URL}/character`)

export { getCharacters }