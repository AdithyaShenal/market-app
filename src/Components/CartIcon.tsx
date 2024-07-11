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
  Thead,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
  Button,
  Tfoot,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ItemProps } from "./ItemCard";

interface Props {
  itemCount: number;
  selectedItems: ItemProps[];
  onRemoveItem: (id: number) => void;
}

const CartIcon = ({ itemCount, selectedItems, onRemoveItem }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip hasArrow label="Check item cart" bg="blue.200" closeDelay={500}>
        <HStack onClick={onOpen} padding="5px" borderRadius={5}>
          <BsCart2 size="28px" />
          <Tag colorScheme="blue">{itemCount}</Tag>
        </HStack>
      </Tooltip>

      <Drawer onClose={onClose} isOpen={isOpen} size={{ md: "lg", lg: "xl" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Items in your cart
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <TableContainer>
              <Table variant="simple" size="sm">
                {/* { sm: "xs", md: "md", lg: "md" } */}
                <Thead>
                  <Tr>
                    <Th>Items</Th>
                    <Th>Description</Th>
                    <Th>Price</Th>
                    <Th>Remove</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedItems.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.name}</Td>
                      <Td>{item.description}</Td>
                      <Td>{item.price.toFixed(2)}</Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          Remove
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Th>Items {selectedItems.length}</Th>
                  <Th>Total</Th>
                  <Th>
                    Rs {}
                    {selectedItems
                      .reduce((acc, item) => acc + item.price, 0)
                      .toFixed(2)}
                  </Th>
                  <Th></Th>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartIcon;
