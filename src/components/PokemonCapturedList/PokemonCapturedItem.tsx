import { Card } from 'react-bootstrap';
import { useViewportContext } from '../../context/ViewportContext';
import { usePokemonContext } from '../../context/PokemonContext';
import { ICapturedPokemon } from '../../types/interfaces';

interface PokemonCapturedItemProps {
  capturedPokemon: ICapturedPokemon
};

const PokemonCapturedItem = ({ capturedPokemon}: PokemonCapturedItemProps ) => {
  const { 
    handlePokemonRemove,
    handlePokemonInspect
   } = usePokemonContext();

   const { isMobile } = useViewportContext()

  return (
    <Card className='captured-pokemon bg-dark text-white text-center'>
      <Card.Img
        className='captured-pokemon'
        src={capturedPokemon.thumbnail}
        onClick={() => { handlePokemonInspect(capturedPokemon.id)}}
      />
      {isMobile ? null : <Card.Text className='mb-1 text-capitalize'>{capturedPokemon.name}</Card.Text>}

      <button
        onClick={() => { handlePokemonRemove(capturedPokemon.capturedId) }}  
        className='delete-btn'
        >
        &times;
      </button>
    </Card>
  )
};

export default PokemonCapturedItem;
