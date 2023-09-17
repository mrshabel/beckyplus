import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  Box,
  Image,
  Text,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

export default function SearchModal({ isOpen, onOpen, onClose }) {
  const initialRef = React.useRef(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchedProducts, setSearchedProducts] = React.useState(null);

  React.useEffect(() => {
    if (searchQuery?.length !== 0) {
      const searchedResults = data.filter(
        product =>
          product.name.includes(searchQuery) ||
          product.description.includes(searchQuery)
      );
      setSearchedProducts(searchedResults);
    } else {
      setSearchedProducts(null);
    }
  }, [searchQuery]);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        // isCentered
        className="w-[90vw]"
        size={useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' })}
        scrollBehavior={'inside'}
      >
        <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Shop your favorite dress</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb={8}>
              <Input
                ref={initialRef}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Dress name"
              />
            </FormControl>
            <Box>
              {searchedProducts?.length > 0 ? (
                searchedProducts?.map((product, index) => (
                  <React.Fragment key={index}>
                    <Divider my={5} />
                    <Link to={`/shop/${product.slug}`} onClick={onClose}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap={3}
                      >
                        <Image
                          src={product.image}
                          boxSize="6rem"
                          rounded="md"
                          mr="4"
                          alt={product.name}
                          objectFit="cover"
                        />
                        <Box display="flex" flexDirection="column" flex={1}>
                          <Text fontSize="16px" fontWeight="semibold">
                            {product.name}
                          </Text>
                          <Text fontSize="13px">{product.description}</Text>
                        </Box>
                        <Text>&#x20B5; {product.price} </Text>
                      </Box>
                    </Link>
                  </React.Fragment>
                ))
              ) : (
                <Box display="flex" justifyContent="center" cursor={'default'}>
                  No Searched Products Found
                </Box>
              )}
            </Box>
          </ModalBody>

          {/* <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
