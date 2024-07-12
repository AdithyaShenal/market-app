import {
  groceryArray,
  vegetablesArray,
  fruitArray,
  skinCareArray,
} from "../services/ItemObjects";
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
          Fresh Vegetables
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 6 }}
          spacing="20px"
        >
          {vegetablesArray.map((itemObject) => (
            <ItemCard onAdd={onAddItem} key={itemObject.id} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" p="30px">
        <Heading size="lg" mb="10px">
          Fresh Fruits
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {fruitArray.map((itemObject) => (
            <ItemCard onAdd={onAddItem} key={itemObject.id} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" p="30px">
        <Heading size="lg" mb="10px">
          Skin Care Products
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {skinCareArray.map((itemObject) => (
            <ItemCard onAdd={onAddItem} key={itemObject.id} item={itemObject} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ItemGrid;
