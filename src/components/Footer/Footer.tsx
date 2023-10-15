import { Link } from "react-router-dom";
import PokebalImg from "../../assets/pokeball.png";
import LocationImg from "../../assets/pointer.png";
import PíkachuImg from "../../assets/pikachu.png";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/pokemons" className={styles.footerLink}>
        <img src={PíkachuImg} alt="pikachu" className={styles.footerIcon} />
        Pokemons
      </Link>
      <Link to="/items" className={styles.footerLink}>
        <img src={PokebalImg} alt="pokeball" className={styles.footerIcon} />
        Items
      </Link>
      <Link to="/map" className={styles.footerLink}>
        <img src={LocationImg} alt="map" className={styles.footerIcon} />
        Map
      </Link>
    </footer>
  );
};

export default Footer;
