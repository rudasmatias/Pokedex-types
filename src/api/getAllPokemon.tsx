//https:/unpkg.com/pokemons@1.1.0/pokemons.json (data.results = [pokemons])
/* import axios from "axios"; */
import { Pokemon } from "../interfaces/Pokemon";
import { noDuplicates } from "../utils/utils";
/* export async function getAllPokemons() {
  try {
    const { data } = await axios(
      "https:/unpkg.com/pokemons@1.1.0/pokemons.json "
    );
    return data.results;
  } catch (error) {
    console.log("No hay data");
  }
}
 */
export async function fetchPokemon(): Promise<Pokemon[]> {
  const response = await fetch(
    "https:/unpkg.com/pokemons@1.1.0/pokemons.json "
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const { results } = await response.json();

  const pokemons = results?.map(
    (pokemon: { name: string; national_number: number; sprites: any }) => ({
      name: pokemon.name,
      id: pokemon.national_number,
      imgSrc:
        pokemon.national_number < 549
          ? pokemon.sprites.animated
          : pokemon.sprites.large,
    })
  );

  const uniquePokemons = noDuplicates(pokemons) as Pokemon[];

  return uniquePokemons;
}
