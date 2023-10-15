/* import viteLogo from '/vite.svg' */
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Pokemons, Detail, Items } from "./views/index";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<Detail />} />
        <Route path="/items" element={<Items />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
