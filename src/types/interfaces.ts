
export interface IPokemonType {
  type: {
    name: string;
  }
};

export interface IPokemonBaseStats {
  base_stat: string;
};

export interface IPokemon {
  image: string;
  name: string;
  order: number | undefined;
  types: IPokemonType[];
  stats: IPokemonBaseStats[];
};

export interface ICapturedPokemon extends IPokemon {
  id: string;
};

