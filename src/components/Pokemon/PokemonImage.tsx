import {
  Box,
  Image,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  image: string;
};

const PokemonImage: FC<Props> = ({ image }) => {
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
