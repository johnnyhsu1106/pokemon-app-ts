interface PokemonOrderProps {
  order: number;
}

const PokemonOrder = ({ order }: PokemonOrderProps) => {
  if (!order) {
    return null;
  }
  
  return (
    <p>Order: {order}</p>
  );
}

export default PokemonOrder;
