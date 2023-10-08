import { Box, Badge, WrapItem, Wrap, Text, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { IPokemonType } from '../../types/interfaces';

interface PokemonTypesProps {
  types: IPokemonType[] | [];
};

const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => {
  if (!types) {
    return null;
  }

  return (
    <Stack pb={3}>
      <Text color='white'>Type</Text>
      <Box>
        <Wrap>
          <WrapItem>
            {types.map((item, i) => {  
              return (
              <Badge key={i} borderWidth={3} rounded='md' borderColor='red.800'>
                {item?.type?.name}
              </Badge>
            )
            })}
          </WrapItem>
        </Wrap>
      </Box>
    </Stack>
  )
}

export default PokemonTypes
