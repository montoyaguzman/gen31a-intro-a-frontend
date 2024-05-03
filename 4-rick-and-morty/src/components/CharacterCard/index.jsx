import { NavLink } from "react-router-dom";
import "./characterCard.css";

const CharacterCard = (props) => {
  // Obtiene el personaje de los props, que es un objeto que se pasa como argumento
  const { personaje } = props;

  return (
    <section className="card mb-3" style={{ maxWidth: 500 }}>
      <div className="row g-0">
        <div className="col-md-4">
          {/* Nos redirige a la ruta del personaje seleccionado con el id del personaje   */}
          <NavLink
            to={`/character/${personaje.id}`}
            className="text-decoration-none"
          >
            <img
              src={personaje.image}
              className="img-fluid rounded-start"
              alt={personaje.name}
            />
          </NavLink>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {personaje.id} {personaje.name}
            </h5>
            <p className="card-text mb-2 d-flex">
              <span
                // Obtiene los estilos de la clase 'dot-status' importada en el archivo 'characterCard.css'
                className="dot-status"
                // Cambia el color del punto según el estado del personaje
                // https://es.react.dev/learn/conditional-rendering
                // Estilo en línea para cambiar el color del punto
                style={{
                  backgroundColor:
                    personaje.status === "Alive"
                      ? "green"
                      : personaje.status === "Dead"
                      ? "red"
                      : "gray",
                }}
              />
              {personaje.status} - {personaje.species}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Visto por primera vez en:
              </small>
              <br />
              {personaje.origin.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterCard;
