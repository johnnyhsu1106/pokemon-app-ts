import { Box, Badge, WrapItem, Wrap, Text, Stack } from '@chakra-ui/react';
import { IPokemonType } from '../../types/interfaces';

interface PokemonTypesProps {
  types: IPokemonType[];
};

const PokemonTypes = ({ types } : PokemonTypesProps) => {
  return (
    <Stack pb={3}>
      <Text color='white'>Type</Text>
      <Box>
        <Wrap>
          <WrapItem>
            {types?.map((type, i) => {  
              return (
              <Badge key={i} borderWidth={3} rounded='md' borderColor='red.800'>
                {type?.type?.name}
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
