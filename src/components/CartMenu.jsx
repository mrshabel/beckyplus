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
  Image,
} from '@chakra-ui/react';
import { BsFillBagFill } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, dispatch } = useCart();

  function handleDelete(e, id) {
    e.stopPropagation();
    dispatch({ type: 'cart/delete', payload: id });
  }

  return (
    <>
      <Menu closeOnSelect={false}>
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
              {cart?.length}
            </Text>
          </Box>
        </MenuButton>
        <MenuList>
          {cart.length !== 0 ? (
            <>
              <MenuList maxH="300px" overflowY="auto" scrollBehavior="smooth">
                {cart.map((product, index) => (
                  <MenuItem key={index} display="flex" alignItems="center">
                    <Image
                      boxSize="4rem"
                      src={product.image}
                      alt={product.name}
                      mr="14px"
                    />
                    <Box
                      flex={1}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      // alignItems="center"
                      fontSize="12px"
                      color="gray.600"
                    >
                      <Text
                        fontSize="14px"
                        color="gray.900"
                        fontWeight="semibold"
                      >
                        {product.name}
                      </Text>
                      <Text>Color: {product.color}</Text>
                      <Text>Size: {product.size}</Text>
                    </Box>
                    <Box
                      flex={1}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="center"
                      fontSize="12px"
                      color="gray.600"
                      width="100%"
                      height="100%"
                      gap="20px"
                    >
                      <Text
                        fontSize="14px"
                        color="gray.900"
                        fontWeight="semibold"
                      >
                        &#x20B5; {product.price}
                      </Text>
                      <HiOutlineTrash
                        size={20}
                        onClick={e => handleDelete(e, product.id)}
                      />
                    </Box>
                  </MenuItem>
                ))}
              </MenuList>

              <MenuItem closeOnSelect>
                <Link
                  to="/"
                  className="bg-black w-full py-2 mt-2 text-gray-50 text-center"
                >
                  View Bag
                </Link>
              </MenuItem>
            </>
          ) : (
            <MenuItem display="flex" justifyContent="center" cursor={'default'}>
              No items in bag
            </MenuItem>
          )}
          {/* <MenuItem>Link 2</MenuItem>
          <MenuDivider />
          <MenuItem>Link 3</MenuItem>
          <MenuItem onClick={onOpen}>Checkout</MenuItem> */}
        </MenuList>
      </Menu>
      {/* <CheckoutDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
    </>
  );
}
