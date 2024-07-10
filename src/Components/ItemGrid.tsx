import groceryArray from "../services/ItemObjects";
import ItemCard from "./ItemCard";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";

const ItemGrid = () => {
  return (
    <>
      <Container maxW="12xl" margin="10px" mb="40px">
        <Heading size="lg" mb="10px">
          Grocery
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {groceryArray.map((itemObject) => (
            <ItemCard
              image={itemObject.image}
              name={itemObject.name}
              price={itemObject.price}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" margin="10px" mb="40px">
        <Heading size="lg" mb="10px">
          Household
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {groceryArray.map((itemObject) => (
            <ItemCard
              image={itemObject.image}
              name={itemObject.name}
              price={itemObject.price}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="12xl" margin="10px" mb="40px">
        <Heading size="lg" mb="10px">
          Vegetables
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 6 }} spacing="20px">
          {groceryArray.map((itemObject) => (
            <ItemCard
              image={itemObject.image}
              name={itemObject.name}
              price={itemObject.price}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ItemGrid;
