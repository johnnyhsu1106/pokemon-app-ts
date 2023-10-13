import { FormEvent, useRef } from 'react'
import { Button, HStack, Input, FormControl } from '@chakra-ui/react';

interface SearchBarProps {
  onSubmitSearchForm: (query: string) => void; 
};

const SearchBar = ({
  onSubmitSearchForm
}: SearchBarProps) => {

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSearchButtonClick = (e: FormEvent) => {
    e.preventDefault();
    onSubmitSearchForm(inputRef.current?.value || '');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <HStack mb={10}>
      <form
        className='search-form' 
        onSubmit={handleSearchButtonClick}>
        <FormControl>
          <Input
            type='text'
            borderWidth={4}
            borderColor='white'
            bg='white'
            placeholder='name or id'
            ref={inputRef}
          />
        </FormControl>
        <Button
          rounded={10}
          type='submit'
          ml={3}
          borderWidth={4} 
          borderColor='white'
        >
          Search
        </Button>

      </form>
  </HStack>
  )
}

export default SearchBar;
