import { Box, Image } from '@chakra-ui/react';

interface PokemonImageProsp {
  image: string;
};

const PokemonImage = ({ image } : PokemonImageProsp) => {
  if (!image) {
    return null;
  }

  return (
  <Box>
    <Box bg='gray.100' rounded='lg'>
      {image && <Image src={image}/>}
    </Box>
  </Box>
  )
}

export default PokemonImage
