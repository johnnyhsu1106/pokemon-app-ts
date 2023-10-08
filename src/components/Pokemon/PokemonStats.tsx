import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface PokemonStatsProps {
  name: string;
  baseStats: string;
};


const PokemonStats: FC<PokemonStatsProps> = ({
  name, 
  baseStats
}) => {

  return (
    <Stack>
      <Text>{name}</Text>
      <Text>{baseStats}</Text>
    </Stack>
  )
}

export default PokemonStats
