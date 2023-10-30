import { Stack } from 'react-bootstrap';
import PokemonType from './PokemonType';
import { IPokemonType } from '../../types/interfaces';

interface PokemonTypesProps {
  types: IPokemonType[];
};

const PokemonTypes = ({ types }: PokemonTypesProps) => {
  if (!types || types.length === 0) {
    return null;
  }

  return (
    <Stack direction='horizontal' gap={3} className='mb-3'>
      {types.map((item, i) => {  
        return (
          <PokemonType
            key={i}
            type={item?.type?.name}
          /> 
        )
      })}
    </Stack>
  )
}

export default PokemonTypes
