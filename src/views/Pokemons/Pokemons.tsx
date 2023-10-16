import { useState } from "react";
import { Link } from "react-router-dom";

import Bulbasaur from "../../assets/bulbasaur.gif";
import styles from "./pokemon.module.css";
import { Header, Footer } from "../../components/index";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link className={styles.listItem} to="pokemon/Bulbasaur">
            <img
              className={styles.listItemIcon}
              src={Bulbasaur}
              alt="Bulbasaur"
            />
            <div className={styles.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
