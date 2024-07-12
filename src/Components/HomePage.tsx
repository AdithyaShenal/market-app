import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ItemGrid from "./ItemGrid";
import { useState } from "react";
import { ItemProps } from "./ItemCard";
import ItemFilter from "./ItemFilter";
import itemsArray from "../services/items";

const HomePage = () => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  const [items, setItems] = useState<ItemProps[]>(itemsArray);

  const onAddItem = (data: ItemProps) => {
    setCartItems([...cartItems, data]);
  };

  const onRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const OnClearCart = () => {
    setCartItems([]);
  };
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "filter" "main"` }}>
        <GridItem area="nav">
          <NavBar
            onClear={OnClearCart}
            itemCount={cartItems.length}
            selectedItems={cartItems}
            onRemoveItem={onRemoveItem}
          />
        </GridItem>

        <GridItem area={"filter"}></GridItem>

        <GridItem area={"main"}>
          <ItemGrid onAddItem={onAddItem} />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
