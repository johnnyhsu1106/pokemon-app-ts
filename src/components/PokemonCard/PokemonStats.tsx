import { Badge, Stack } from 'react-bootstrap';

interface PokemonStatsProps {
  name: string;
  baseStats: number;
}

const PokemonStats = ({
  name, 
  baseStats
}: PokemonStatsProps) => {

  return (
    <Stack direction='vertical' gap={1} className='text-center'>
      <Badge pill bg="light" text="dark">{name}</Badge>
      <p>{baseStats}</p>
    </Stack>
  )
}

export default PokemonStats;
