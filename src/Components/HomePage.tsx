import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ItemGrid from "./ItemGrid";
import { useState } from "react";
import { ItemProps } from "./ItemCard";

const HomePage = () => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  const onAddItem = (data: ItemProps) => {
    setCartItems([...cartItems, data]);
  };

  const onRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav">
          <NavBar
            itemCount={cartItems.length}
            selectedItems={cartItems}
            onRemoveItem={onRemoveItem}
          />
        </GridItem>
        <GridItem area={"main"}>
          <ItemGrid onAddItem={onAddItem} />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
