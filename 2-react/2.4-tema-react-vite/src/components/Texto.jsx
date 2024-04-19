import { Fragment, useState } from "react";

const Texto = () => {
// El primer valor es el estado y el segundo es la función que lo modifica 
  const [monstrar, setMostrar] = useState(false)
// El titulo esta vacio, por eso no se muestra  
  const [titulo, setTitulo] = useState('')
  
  const handlerClick = () => {
    // Cambiar el estado de 'monstrar'
    setMostrar(!monstrar);
    // Cambiar el estado de 'titulo'
    setTitulo('Nuevo título del componente Texto')
  };
  console.log('Estado de monstrar:', monstrar)
  return (
    <Fragment>
      {/* Si 'mostrar es true, muesta el h1' */}
      { monstrar && <h1>Título del componente Texto</h1>}
      <h4>{titulo}</h4>
      {/* En el evento onClic, cambiamos el state del componente */}
      <button onClick={handlerClick}>{monstrar ? 'Ocultar' : 'Mostrar'}</button>
    </Fragment>
  );
};

export default Texto;
