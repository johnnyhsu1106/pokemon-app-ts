import { Card } from 'react-bootstrap';
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

  return (
    <Card className='captured-pokemon bg-dark text-white text-center'>
      <Card.Img
        className='captured-pokemon'
        src={capturedPokemon.thumbnail}
        onClick={() => { handlePokemonInspect(capturedPokemon.id)}}
      />
      <Card.Text className='mb-1'>{capturedPokemon.name}</Card.Text>

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
