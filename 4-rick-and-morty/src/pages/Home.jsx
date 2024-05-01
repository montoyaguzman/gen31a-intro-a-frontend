import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterServices";

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
      {personajes.map((personaje, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={personaje.image} className="img-fluid rounded-start" alt={personaje.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">
                  {personaje.status} - {personaje.species}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
