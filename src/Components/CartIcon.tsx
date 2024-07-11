import { BsCart2 } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  Tag,
  useDisclosure,
  Tooltip,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { ItemProps } from "./ItemCard";

interface Props {
  itemCount: number;
  selectedItems: ItemProps[];
}

const CartIcon = ({ itemCount, selectedItems }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip hasArrow label="Check item cart" bg="blue.200" closeDelay={500}>
        <HStack onClick={onOpen} padding="5px" borderRadius={5}>
          <BsCart2 size="28px" />
          <Tag colorScheme="blue">{itemCount}</Tag>
        </HStack>
      </Tooltip>

      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Item Cart</DrawerHeader>
          <DrawerBody>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedItems.map((item) => (
                    <Td>{item.name}</Td>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartIcon;
