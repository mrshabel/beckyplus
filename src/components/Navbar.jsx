import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Link as ChakraLink,
  LinkProps,
  Stack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import NavbarDrawer from './NavbarDrawer';
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons';
import CartMenu from './CartMenu';
import Search from './Search';

const Links = [
  { title: 'New Arrivals', link: '/' },
  { title: 'Shop', link: 'shop' },
];

const NavLink = props => {
  const { link, title, onClose } = props;
  return (
    <ChakraLink
      as={ReactRouterLink}
      px={2}
      py={1}
      rounded={'md'}
      className="tracking-tight "
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      _activeLink={{
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      onClick={onClose}
      to={link}
    >
      {title}
    </ChakraLink>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, index) => (
                <NavLink key={index} link={link.link} title={link.title} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box className="text-gray-800 font-semibold text-2xl">Becky+</Box>
          </Flex>

          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<EmailIcon />}
            >
              Login
            </Button> */}
            <Search />
            <CartMenu />
          </Flex>
        </Flex>

        {isOpen ? (
          <NavbarDrawer
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
            Links={Links}
            NavLink={NavLink}
          />
        ) : null}
      </Box>
    </>
  );
}
