import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterServices";
import CharacterCard from "../components/CharacterCard";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  // Se crean los estados de personajes, busqueda y página
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);

  const getInitialData = async () => {
    try {
      // Hace la petición a la API y obtiene los datos con los estados de busqueda y página
      const { data } = await getCharacters(busqueda, page);
      // Extrae los resultados de la data, contiene la información de los personajes
      const { results } = data;
      // Actualiza el estado de personajes con los resultados obtenidos
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      // Si falla la petición, muestra un alert con el mensaje de error
      alert("Algo fallo en la petición");
    }
  };

  useEffect(() => {
    // Al cargar el componente, se ejecuta la función getInitialData, que hace la petición a la API
    getInitialData();
    // Cuando cambie el valor de 'page', se ejecuta la función getInitialData
  }, [page]);

  return (
    <div className="bg-body-tertiary">
      <SearchBar
        text={busqueda}
        setText={setBusqueda}
        search={() => {
          // Al hacer click en el botón de 'Search', se actualiza la página a 1 por si estamos en otra página y se ejecuta la función getInitialData
          setPage(1);
          getInitialData();
        }}
      />
      <Pagination page={page} setPage={setPage} />
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={index} personaje={personaje} />
        ))}
      </CharacterList>
    </div>
  );
};

export default Home;
