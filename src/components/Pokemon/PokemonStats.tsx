import { Stack, Text } from '@chakra-ui/react';

interface PokemonStatsProps {
  name: string;
  baseStats: number;
};

const PokemonStats = ({
  name, 
  baseStats
}: PokemonStatsProps) => {

  return (
    <Stack>
      <Text>{name}</Text>
      <Text>{baseStats}</Text>
    </Stack>
  )
}

export default PokemonStats
