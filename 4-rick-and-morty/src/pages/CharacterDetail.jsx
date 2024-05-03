import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterId } from "../services/characterServices";

const CharacterDetail = () => {
  // Se obtiene el id del personaje de los parámetros de la URL
 //  https://reactrouter.com/en/main/hooks/use-params 
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  const getCharacterData = async () => {
    try {
      // Hace la petición a la API con el id del personaje 
      const response = await getCharacterId(id);
      // Extrae los datos de la respuesta
      const { data } = response;
      // Actualiza el estado de personaje con los datos obtenidos
      setPersonaje(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  return (
    <div className="container marketing">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            {personaje.name} - 
            <span className="text-body-secondary">{personaje.species}</span>
          </h2>
          <p className="lead">
            {personaje.origin?.name} - {personaje.location?.name}
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={personaje.image}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
