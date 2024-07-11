import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";

export interface ItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ItemCardProps {
  item: ItemProps;
  onAdd: (data: ItemProps) => void;
}

const ItemCard = ({ item, onAdd }: ItemCardProps) => {
  return (
    <>
      <Card overflow="hidden">
        <Image src={item.image} boxSize="" />
        <CardBody padding="10px">
          <HStack justify="space-between" align="start">
            <Stack>
              <Heading size="md">{item.name}</Heading>
              <Text>Rs {item.price.toFixed(2)}</Text>
            </Stack>
            <Button
              boxShadow="base"
              colorScheme="blue"
              size="sm"
              mt="5px"
              onClick={() => onAdd(item)}
            >
              Add to Cart
            </Button>
          </HStack>
          <Divider />
          <Text>{item.description}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ItemCard;
