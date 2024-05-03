import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Se añade ruta dinamica para el detalle del personaje */}
      {/* https://reactrouter.com/en/main/route/route#dynamic-segments */}
      <Route path='character/:id' element={<CharacterDetail/>}/>
      <Route path="/about" element={<h1>Sobre mi</h1>} />
      {/* Cuando no se encuentre la ruta se muestra este mensaje */}
      <Route path="*" element={<h1>Pagina no disponible</h1>} />
    </Routes>
  );
};

export default RoutesIndex;
