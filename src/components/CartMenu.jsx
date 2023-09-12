import {
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  Text,
  MenuList,
  Button,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { BsFillBagFill } from 'react-icons/bs';
import CheckoutDrawer from './CheckoutDrawer';

export default function CartMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          // rounded={'full'}
          // variant={'link'}
          cursor={'pointer'}
          minW={0}
          bg={'transparent'}
        >
          <Box className="relative">
            <BsFillBagFill size={25} />
            <Text className="absolute top-2 left-[5px] z-10 text-center w-4 h-4  rounded-full text-[12px] text-white">
              0
            </Text>
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>Link 1</MenuItem>
          <MenuItem>Link 2</MenuItem>
          <MenuDivider />
          <MenuItem>Link 3</MenuItem>
          <MenuItem onClick={onOpen}>Checkout</MenuItem>
        </MenuList>
      </Menu>
      <CheckoutDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
