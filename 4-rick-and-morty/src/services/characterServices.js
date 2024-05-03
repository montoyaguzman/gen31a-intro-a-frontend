import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api"

// Función que obtiene los personajes de la API, recibe el nombre y la página
const getCharacters = async (nombre, page) => axios.get(`${BASE_URL}/character?name=${nombre}&page=${page}`)
// Función que obtiene un personaje por id
const getCharacterId = async (id) => axios.get(`${BASE_URL}/character/${id}`);

export { getCharacters, getCharacterId }