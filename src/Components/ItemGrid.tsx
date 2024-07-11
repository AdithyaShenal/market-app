import groceryArray from "../services/ItemObjects";
import ItemCard from "./ItemCard";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { ItemProps } from "./ItemCard";

interface Props {
  onAddItem: (data: ItemProps) => void;
}

const ItemGrid = ({ onAddItem }: Props) => {
  return (
    <>
      <Container maxW="12xl" p="30px">
        <Heading size="lg" mb="10px">
          Grocery
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {groceryArray.map((itemObject) => (
            <ItemCard key={itemObject.id} onAdd={onAddItem} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" p="30px">
        <Heading size="lg" mb="10px">
          Household
        </Heading>
        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
          spacing="20px"
        >
          {groceryArray.map((itemObject) => (
            <ItemCard onAdd={onAddItem} key={itemObject.id} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" p="30px">
        <Heading size="lg" mb="10px">
          Vegetables
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {groceryArray.map((itemObject) => (
            <ItemCard onAdd={onAddItem} key={itemObject.id} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ItemGrid;
