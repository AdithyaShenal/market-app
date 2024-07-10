import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

interface ItemCardProps {
  name: string;
  price: number;
  image: string;
}

const ItemCard = ({ name, price, image }: ItemCardProps) => {
  return (
    <>
      <Card overflow="hidden">
        <Image src={image} />
        <CardBody padding="10px">
          <Heading size="md">{name}</Heading>
          <Text>Rs {price.toFixed(2)}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ItemCard;
