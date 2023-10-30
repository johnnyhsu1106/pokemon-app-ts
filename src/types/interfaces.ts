
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
  id?: number,
  name?: string;
  thumbnail?: string;
  image?: string;
  order?: number;
  types?: IPokemonType[];
  stats?: IPokemonStats[];
};

export interface ICapturedPokemon extends IPokemon {
  capturedId: string;
};

