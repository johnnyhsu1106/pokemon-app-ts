import { Box, Image, Text, WrapItem } from '@chakra-ui/react';
import { ICapturedPokemon } from '../../types/interfaces';

interface CapturedPokemonListProps {
  capturedPokemons: ICapturedPokemon[];
  removeCapturedPokemon: (id: string) => void;
};

const CapturedPokemonList = ({
  capturedPokemons,
  removeCapturedPokemon
}: CapturedPokemonListProps) => {
  return (
    <Box rounded='lg'>
      <Text color='white' fontSize='xl' fontWeight={600}>Pocket</Text>
      <Text color='white' fontSize='sm' fontWeight={300}>Max 5</Text>
    
      { capturedPokemons.map((capturedPokemon) => {
        const { id } = capturedPokemon;
        return (
          <WrapItem
            key={id}  
            position='relative'>
            <Image
              m='auto'
              className='captured-pokemon'
              src={capturedPokemon?.image}/>
            <div
              onClick={() => { removeCapturedPokemon(id) }}  
              className='delete-btn'>
                &times;
            </div>
              
          </WrapItem>
        )}
      )}
    </Box>
  )
}

export default CapturedPokemonList
