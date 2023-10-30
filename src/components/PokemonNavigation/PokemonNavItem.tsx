import { Button } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';

interface PokemonNavItemProps {
  pokemonName: string;
};

const PokemonNavItem = ({ pokemonName }: PokemonNavItemProps) => {
  const { 
    selectedPokemonName,
    handlePokemonSelect 
  } = usePokemonContext();

  return (
    <Button
      variant='outline-light'
      className= {`mt-1 pokeomn-nav-item text-capitalize ${pokemonName === selectedPokemonName ? 'selected' : ''}`}
      onClick={() => { handlePokemonSelect(pokemonName)}}
    >
      {pokemonName}
    </Button>
  )
}

export default PokemonNavItem;
