import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
export default function Menu({ title, items, setMenu }) {
  return (
    <ChakraMenu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              setMenu(item);
            }}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
}
