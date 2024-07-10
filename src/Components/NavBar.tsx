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
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Show above="md">
        <HStack justifyContent="space-between" padding="20px">
          <Image src={logo} boxSize="64px" />
          <Tabs size="md" variant="unstyled" colorScheme="blue" align="end">
            <TabList>
              <HStack spacing="20px">
                <Tab _hover={{ color: "white", bg: "blue.500" }}>Home</Tab>
                <Tab _hover={{ color: "white", bg: "blue.500" }}>About Us</Tab>
                <Tab _hover={{ color: "white", bg: "blue.500" }}>
                  Contact Us
                </Tab>
                <BsCart2 size="32px" />
              </HStack>
            </TabList>
          </Tabs>
        </HStack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <HStack justifyContent="space-between" padding="10px">
          {" "}
          <Image src={logo} boxSize="55px" />
          <HStack spacing="20px">
            <BsCart2 size="32px" />
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
