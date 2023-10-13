import { Stack } from '@chakra-ui/react';
import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonOrder from './PokemonOrder';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';
import { IPokemonType, IPokemonStats } from '../../types/interfaces';

interface PokemonProps {
  image: string;
  name: string;
  order: number | undefined;
  types: IPokemonType[];
  stats: IPokemonStats[];
};

const Pokemon = ({  
  image,
  name,
  order,
  types,
  stats,
}: PokemonProps) => {
  return ( 
    <>
      <PokemonImage image={image} />
      <Stack mb={5}>
        <PokemonName name={name} />
        <PokemonOrder order={order} />
        <PokemonTypes types={types} />
        <PokemonStatsList stats={stats} />
      </Stack>
    </>
  )
}

export default Pokemon
