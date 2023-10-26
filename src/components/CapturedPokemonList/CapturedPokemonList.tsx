import { Box, Text } from '@chakra-ui/react';
import { usePokemonContext } from '../../context/PokemonContext';
import CapturedPokemon from './CapturedPokemon';

const CapturedPokemonList = () => {
  const { capturedPokemons } = usePokemonContext();

  return (
    <Box rounded='lg'>
      <Text color='white' fontSize='xl' fontWeight={600}>Pocket</Text>
      <Text color='white' fontSize='sm' fontWeight={300}>Max 5</Text>
    
      { capturedPokemons.map((capturedPokemon) => {
        return (
          <CapturedPokemon key={capturedPokemon.id} capturedPokemon={capturedPokemon} />
        )}
      )}
    </Box>
  )
}

export default CapturedPokemonList
