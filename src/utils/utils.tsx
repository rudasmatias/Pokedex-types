export function formatPokemonName(name: string): string {
  if (name.includes("♀")) {
    return name.replace("♀", "-f");
  } else if (name.includes("♂")) {
    return name.replace("♂", "-m");
  } else if (name.includes(". ")) {
    return name.replace(". ", "-");
  } else if (name.includes("Farfetch'd")) {
    return name.replace("Farfetch'd", "Farfetchd");
  } else return name;
}

export function noDuplicates(array: any): Object[] {
  //mapeo por id
  const arr = [];

  let e;
  //recorro array
  for (e of array) {
    if (!arr.map((e) => e.id).includes(e.id)) {
      arr.push(e);
    }
  }

  return arr;
}
