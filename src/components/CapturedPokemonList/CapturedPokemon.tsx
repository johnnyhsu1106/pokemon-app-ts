import { Image, WrapItem } from '@chakra-ui/react';
import { ICapturedPokemon } from '../../types/interfaces';
import { usePokemonContext } from '../../context/PokemonContext';

interface CapturedPokemonProps {
  capturedPokemon: ICapturedPokemon;
};


const CapturedPokemon = ({
  capturedPokemon
}: CapturedPokemonProps) => {
  const { handlePokemonRemove } = usePokemonContext();

  return (
    <WrapItem
      position='relative'>
      <Image
        m='auto'
        className='captured-pokemon'
        src={capturedPokemon.image}/>
      <div
        onClick={() => { handlePokemonRemove(capturedPokemon.id) }}  
        className='delete-btn'>
          &times;
      </div>
    </WrapItem>
  )
};

export default CapturedPokemon;
