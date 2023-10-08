import { HStack } from '@chakra-ui/react';
import PokemonStats from './PokemonStats';
import { IPokemonBaseStats } from '../../types/interfaces';
import { FC } from 'react';

interface PokemonStatsListProps {
  stats: IPokemonBaseStats[];
}

const STATS_NAMES = [
  'Hp', 
  'Attack', 
  'Defense', 
  'Sp Attack', 
  'Sp Defense', 
  'Speed'
];


const PokemonStatsList: FC<PokemonStatsListProps> = ({ stats }) => {
  if (!stats) {
    return null;
  }
  
  return (
    <HStack color='white'>
      {
        STATS_NAMES.map((STATS_NAME, i) => {
          return (
            <PokemonStats 
              key={i} 
              name={STATS_NAME} 
              baseStats={ stats[i].base_stat} />
          )
        })
      }
    </HStack>
  )
}

export default PokemonStatsList;
