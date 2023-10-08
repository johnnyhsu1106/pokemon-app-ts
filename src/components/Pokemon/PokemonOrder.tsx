import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface PokemonOrderProps {
  order: number | undefined;
};

const PokemonOrder: FC<PokemonOrderProps> = ({ order }) => {
  if (!order) {
    return null;
  }
  
  return (
    <Text color='white' fontSize='md' fontWeight={600}>
      #{order}
    </Text>
  );
}

export default PokemonOrder;
