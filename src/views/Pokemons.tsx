import { useState } from "react";

import { Header, Footer } from "../components/index";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <h1>Pokémon!!</h1>
      <Footer />
    </>
  );
};

export default Pokemons;
