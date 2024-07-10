import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ItemGrid from "./ItemGrid";

const HomePage = () => {
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <ItemGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
