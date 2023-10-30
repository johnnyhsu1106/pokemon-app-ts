import { Badge } from 'react-bootstrap'

interface PokemonTypeProps {
  type: string;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  return (
    <h5><Badge>{type}</Badge></h5>
  )
}

export default PokemonType;
