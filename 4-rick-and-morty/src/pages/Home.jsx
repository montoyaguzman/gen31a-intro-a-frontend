import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterServices";
import CharacterCard from "../components/CharacterCard";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);

  const getInitialData = async () => {
    try {
      const { data } = await getCharacters(busqueda, page);
      const { results } = data;
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      alert("Algo fallo en la petición");
    }
  };

  useEffect(() => {
    getInitialData();
  }, [page]);

  return (
    <div className="bg-body-tertiary">
      <SearchBar text={busqueda} setText={setBusqueda} search={getInitialData}/>
      <Pagination page={page} setPage={setPage}/>
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={index} personaje={personaje} />
        ))}
      </CharacterList>
    </div>
  );
};

export default Home;
