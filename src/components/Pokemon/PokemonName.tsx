import { Text } from '@chakra-ui/react';

interface PokemonNameProps {
  name: string;
};

const PokemonName = ({ name } : PokemonNameProps) => {
  if (!name) {
    return null;
  }
  
  return (
    <Text color='white' fontSize='xl' fontWeight={600}>
      {name}
    </Text>
  )
}

export default PokemonName;
