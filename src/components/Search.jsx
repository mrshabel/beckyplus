import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { IoIosSearch } from 'react-icons/io';
import SearchModal from './SearchModal';
import { useState } from 'react';

export default function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Button
          // variant={'solid'}
          // colorScheme={'transparent'}
          bg={'transparent'}
          color={'gray.600'}
          fontWeight={'light'}
          size={'sm'}
          mr={4}
          className=""
          rightIcon={<IoIosSearch />}
          onClick={onOpen}
        >
          Search
        </Button>
      </Box>
      <SearchModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
}
