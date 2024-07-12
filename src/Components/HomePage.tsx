import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ItemGrid from "./ItemGrid";
import { useState } from "react";
import { ItemProps } from "./ItemCard";
import ItemFilter from "./ItemFilter";

const HomePage = () => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  const onAddItem = (data: ItemProps) => {
    setCartItems([...cartItems, data]);
  };

  const onRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const OnClearCart = () => {
    setCartItems([]);
  };

  const onSubmit = (data: { category: string }) => {
    console.log(data);
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

        <GridItem area={"filter"}>
          <ItemFilter onSubmit={onSubmit} />
        </GridItem>

        <GridItem area={"main"}>
          <ItemGrid onAddItem={onAddItem} />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
