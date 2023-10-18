import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./pokemon.module.css";
import { Header, Footer } from "../../components/index";
import { fetchPokemon } from "../../api/getAllPokemon";
import { Pokemon } from "../../interfaces/Pokemon";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    /*     async function getAll() {
      const data = await getAllPokemons();
      setAllPokemons(data);
    }
    getAll(); */
    const fetchAllPokemon = async () => {
      const allPokemons = await fetchPokemon();

      setPokemons(allPokemons);
    };

    fetchAllPokemon();
  }, []);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {pokemons?.map((pokemon: Pokemon, index: number) => {
            return (
              <Link
                className={styles.listItem}
                to={`pokemon/${pokemon.name}`}
                key={index}
              >
                <img
                  className={styles.listItemIcon}
                  src={pokemon.imgSrc}
                  alt={pokemon.name}
                />
                <div className={styles.listItemText}>
                  <span>{pokemon.name}</span>
                  <span>{pokemon.id}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
