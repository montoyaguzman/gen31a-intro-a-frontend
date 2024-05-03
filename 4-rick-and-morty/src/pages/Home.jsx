import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterServices";
import CharacterCard from "../components/CharacterCard";
import CharacterList from "../components/CharacterList";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("Busqueda");

  const getInitialData = async () => {
    try {
      const { data } = await getCharacters();
      const { results } = data;
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      alert("Algo fallo en la petición");
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={index} personaje={personaje} />
        ))}
      </CharacterList>
    </>
  );
};

export default Home;
