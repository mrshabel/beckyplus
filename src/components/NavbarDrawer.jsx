import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export default function NavbarDrawer({
  Links,
  NavLink,
  onOpen,
  isOpen,
  onClose,
}) {
  function handleClose(e) {
    e.stopPropagation();
    onClose();
  }
  return (
    <>
      <Drawer
        display={{ md: 'none' }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        onOpen={onOpen}
      >
        <DrawerOverlay />
        <DrawerContent textAlign="center">
          <DrawerCloseButton />
          <DrawerHeader marginTop="8vh">Welcome to Becky+</DrawerHeader>

          <DrawerBody marginTop="3vh">
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink
                  // onClick={handleClose}
                  onClose={onClose}
                  key={index}
                  link={link.link}
                  title={link.title}
                />
              ))}
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
