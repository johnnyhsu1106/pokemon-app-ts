import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  name: string;
};

const PokemonName: FC<Props> = ({ name }) => {
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
