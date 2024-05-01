import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Pagina no disponible</h1>} />
    </Routes>
  );
};

export default RoutesIndex;
