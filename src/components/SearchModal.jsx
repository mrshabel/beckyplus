import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export default function SearchModal({ isOpen, onOpen, onClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        className="w-[90vw]"
        size={useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' })}
        scrollBehavior={'inside'}
      >
        <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Shop your favorite dress</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="Dress name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
