
export interface IPokemonType {
  type: {
    name: string;
  }
};

export interface IPokemonStats {
  base_stat: number;
  stat: {
    name: string;
  }
};

export interface IPokemon {
  image: string;
  name: string;
  order: number | undefined;
  types: IPokemonType[];
  stats: IPokemonStats[];
};

export interface ICapturedPokemon extends IPokemon {
  id: string;
};

