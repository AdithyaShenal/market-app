import { HStack, Tag } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";

interface Props {
  itemCount: number;
}

const CartIcon = ({ itemCount }: Props) => {
  return (
    <>
      <HStack>
        <BsCart2 size="28px" />
        <Tag colorScheme="blue">{itemCount}</Tag>
      </HStack>
    </>
  );
};

export default CartIcon;
