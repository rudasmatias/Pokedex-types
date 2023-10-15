import styles from "./header.module.css";

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};
const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <form action="" /* onSubmit={} */ className={styles.form}>
        <input
          type="text"
          placeholder="Search a Pokemon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
