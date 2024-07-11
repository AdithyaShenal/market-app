import {
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import market_logo from "../assets/logo.svg";
import CartIcon from "./CartIcon";
import { ItemProps } from "./ItemCard";

interface Props {
  itemCount: number;
  selectedItems: ItemProps[];
}

const NavBar = ({ itemCount, selectedItems }: Props) => {
  return (
    <>
      <Show above="md">
        <HStack justifyContent="space-between" padding="20px">
          <Image src={market_logo} width="200px" height="90px" />
          <Tabs size="md" variant="unstyled" colorScheme="blue" align="end">
            <TabList>
              <HStack spacing="20px">
                <CartIcon itemCount={itemCount} selectedItems={selectedItems} />
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  Home
                </Tab>
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  About Us
                </Tab>
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  Contact Us
                </Tab>
              </HStack>
            </TabList>
          </Tabs>
        </HStack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <HStack justifyContent="space-between" padding="10px">
          {" "}
          <Image src={market_logo} boxSize="100px" />
          <HStack spacing="20px">
            <CartIcon itemCount={itemCount} selectedItems={selectedItems} />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Contact Us</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Show>
    </>
  );
};

export default NavBar;
