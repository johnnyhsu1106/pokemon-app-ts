import { createContext, useContext, useState, useEffect, ReactNode} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IPokemon, ICapturedPokemon } from '../types/interfaces';

interface IPokemonContext {
  pokemon: IPokemon;
  capturedPokemons: ICapturedPokemon[];
  isCaptureButtonDisabled: boolean
  handleSearchPokemon: (query: string) => void
  handleCapturePokemon: () => void;
  handlePokemonRemove: (id: string) => void;
};

interface PokemonProviderProps {
  children: ReactNode;
};

const MAX_CAPTURED_POKEMONS_NUM: number = 5;
const PokemonContext = createContext<IPokemonContext | null>(null);

const usePokemonContext = () => {
  const pokemonContext = useContext(PokemonContext);

  if (pokemonContext === null) {
    throw new Error('usePokemonContext must be used within PokemonProvider');
  }
  return pokemonContext;
};


const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>({
    image: '',
    name: '',
    order: undefined,
    types: [],
    stats: []
  });
  const [capturedPokemons, setCapturedPokemons] = useState<ICapturedPokemon[]>([]);
  
  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM;
  
  useEffect(() => {
    fetchPokemon('1');
  }, []);

  const fetchPokemon = async (query: string): Promise<void> => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`); 
      const data = await req.json();

      setPokemon({
        image: data?.sprites?.front_default || '',
        name: data?.name || '',
        order: data?.order,
        types: data?.types,
        stats: data?.stats
      });
      
    } catch (err) {
      console.error(err);
    }
  };


  const handleCapturePokemon = (): void => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }

    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, {...pokemon, id: uuidv4()}];
    });
  };


  const handleSearchPokemon = (query: string): void => {
    if (!query || query.trim() === '') {
      return;
    }

    fetchPokemon(query);
  };
  
  const handlePokemonRemove = (id: string) => {
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((prevCapturedPokemon) => {
        return prevCapturedPokemon.id !== id;
      })
    });
  };


  const value = {
    pokemon,
    capturedPokemons,
    isCaptureButtonDisabled,
    handleSearchPokemon,
    handleCapturePokemon,
    handlePokemonRemove
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

export { usePokemonContext, PokemonProvider}
