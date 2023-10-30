import { createContext, useContext, useState, useEffect, ReactNode} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ICapturedPokemon, IPokemon } from '../types/interfaces';

interface IPokemonContext {
  isError: boolean, 
  pokemon: IPokemon | null,
  selectedPokemonName: string;
  pokemonNames: string[];
  prevPageUrl: string;
  nextPageUrl: string;
  capturedPokemons: ICapturedPokemon[];
  isCaptureButtonDisabled: boolean;
  MAX_CAPTURED_POKEMONS_NUM: number;
  handlePokemonSearch: (name: string) => void;
  handlePokemonSelect: (name: string) => void;
  handlePrevButtonClick: () => void;
  handleNextButtonClick: () => void;
  handlePokemonCapture: () => void;
  handlePokemonInspect: (id?: number) => void;
  handlePokemonRemove: (capturedId: string) => void;
  handlePokemonsClear: () => void;
};

interface PokemonProviderProps {
  children: ReactNode
};

const API_ENDPOINT_BASE: string = 'https://pokeapi.co/api/v2/pokemon';
const MAX_CAPTURED_POKEMONS_NUM: number = 5;
const PokemonContext = createContext<IPokemonContext | null>(null);

const usePokemonContext = () => {
  const pokemonContext = useContext(PokemonContext);

  if (pokemonContext === null) {
    throw new Error('usePokemonContext must be used within PokemonProvider');
  }
  return pokemonContext;
}

const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [currPageUrl, setCurrPageUrl] = useState(API_ENDPOINT_BASE);
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedPokemonName, setSelectedPokemonName] = useState('bulbasaur');
  const [isError, setIsError] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [capturedPokemons, setCapturedPokemons] = useState<ICapturedPokemon[]>([]);

  const isCaptureButtonDisabled: boolean = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM || isError;

  useEffect(() => {
    fetchPokemon(selectedPokemonName);
  }, [selectedPokemonName]);


  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemons = async () => {
      try {
        const res = await fetch(currPageUrl);
        if (!res.ok) {
          throw new Error('Invalid HTTP Status Code');
        }
        const data = await res.json();
        setPokemonNames(data?.results.map((result: IPokemon) => result.name));
        setPrevPageUrl(data?.previous);
        setNextPageUrl(data?.next);
  
      } catch (err: any) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error(err); 
      }
    };


    fetchPokemons();

    return () => {
      controller.abort();
    };
  }, [currPageUrl]);


  const fetchPokemon = async (name: string) => {
    setIsError(false);
    
    try {
      const req = await fetch(`${API_ENDPOINT_BASE}/${name}`); 
      if (!req.ok) {
        throw new Error('Cound not find this pokemon');
      }
      const data = await req.json();
      setPokemon({
        id: data?.id,
        name: data?.name,
        thumbnail: data?.sprites?.front_default,
        image: data?.sprites?.other?.['official-artwork']?.front_default,
        order: data?.order,
        types: data?.types,
        stats: data?.stats
      });
      
    } catch (err) {
      setIsError(true);
      setPokemon(null);
      console.error('error happen');
    }
  };

  const handlePokemonSelect = (name: string) => {
    setSelectedPokemonName(name);
  };

  const handlePokemonCapture = () => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }

    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, {...pokemon, capturedId: uuidv4() }];
    });
  };

  const handlePokemonSearch = (name: string) => {
    if (!name || name.trim() === '') {
      return;
    }

    setSelectedPokemonName(name);
  };

  const handlePokemonInspect = (id?: number) => {
    const capturedPokemon = capturedPokemons.find((capturedPokemon) => {
      return capturedPokemon?.id === id;
    });

    if (!capturedPokemon) {
      return;
    }
    const { capturedId, ...pokemon } = capturedPokemon
    setPokemon(pokemon);
    setIsError(false);
  };
  
  const handlePokemonRemove = (capturedId: string) => {
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((prevCapturedPokemon) => {
        return prevCapturedPokemon.capturedId !== capturedId;
      })
    });
  };


  const handlePokemonsClear = () => {
    setCapturedPokemons([]);  
  };


  const handlePrevButtonClick = () => {
    setCurrPageUrl(prevPageUrl);
  };

  const handleNextButtonClick = () => {
    setCurrPageUrl(nextPageUrl);
  };

  const value: IPokemonContext = {
    isError,
    pokemon,
    selectedPokemonName,
    pokemonNames,
    prevPageUrl,
    nextPageUrl,
    capturedPokemons,
    isCaptureButtonDisabled,
    MAX_CAPTURED_POKEMONS_NUM,
    handlePokemonSearch,
    handlePokemonSelect,
    handlePrevButtonClick,
    handleNextButtonClick,
    handlePokemonCapture,
    handlePokemonInspect,
    handlePokemonRemove,
    handlePokemonsClear
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

export { usePokemonContext, PokemonProvider}
