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
import { Link } from "react-router-dom";

interface Props {
  itemCount: number;
  selectedItems: ItemProps[];
  onRemoveItem: (data: number) => void;
}

const NavBar = ({ itemCount, selectedItems, onRemoveItem }: Props) => {
  return (
    <>
      <Show above="md">
        <HStack justifyContent="space-between" padding="20px">
          <Image src={market_logo} width="200px" height="90px" />
          <Tabs size="md" variant="unstyled" colorScheme="blue" align="end">
            <TabList>
              <HStack spacing="20px">
                <CartIcon
                  itemCount={itemCount}
                  selectedItems={selectedItems}
                  onRemoveItem={onRemoveItem}
                />
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  <Link to={"/"}>Home</Link>
                </Tab>
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  <Link to={"./about"}>About Us</Link>
                </Tab>
                <Tab
                  borderRadius="5"
                  boxShadow="base"
                  _hover={{ color: "white", bg: "blue.500" }}
                >
                  <Link to={"./contact"}>Contact Us</Link>
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
            <CartIcon
              itemCount={itemCount}
              selectedItems={selectedItems}
              onRemoveItem={onRemoveItem}
            />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  <Link to={"/"}>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"./about"}></Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"./contact"}>Contact Us</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Show>
    </>
  );
};

export default NavBar;
