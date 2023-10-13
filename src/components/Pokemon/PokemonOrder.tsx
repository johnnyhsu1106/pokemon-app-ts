import { Text } from '@chakra-ui/react';

interface PokemonOrderProps {
  order: number | undefined;
};

const PokemonOrder = ({ order } : PokemonOrderProps) => {
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
