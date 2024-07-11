import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Show,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import team from "../assets/team.svg";
import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

export const AboutUs = () => (
  <>
    <Container></Container>
    <Grid
      templateAreas={` "head" 
                       "description" 
                       "rest" `}
      //   gridTemplateColumns={"1fr 1fr"}
      padding="50px"
      gap={6}
    >
      <GridItem area={"head"}>
        <Heading>About us</Heading>
      </GridItem>

      <GridItem area={"description"}>
        <Card>
          <CardHeader>
            <Heading size="md">Nice to meet you</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Vision
                </Heading>
                <Text pt="2" fontSize="sm">
                  Our vision is to be the leading online supermarket, recognized
                  for delivering exceptional quality, variety, and convenience
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Mission
                </Heading>
                <Text pt="2" fontSize="sm">
                  Our mission is to provide a seamless and enjoyable grocery
                  shopping experience that exceeds our customers' expectations.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem area={"rest"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image src={team} maxWidth="500px" />

          <Stack>
            <CardBody>
              <Heading size="md">Our Team</Heading>

              <Text py="2">
                At the heart of our Online Supermarket is a dedicated and
                passionate team committed to making your shopping experience as
                seamless and enjoyable as possible. Our diverse team brings
                together expertise from various fields, including food sourcing,
                technology, logistics, customer service, and marketing. Each
                member plays a vital role in ensuring that we meet our high
                standards for quality, efficiency, and customer satisfaction.{}
                Our product sourcing team works tirelessly to select the finest
                products from trusted suppliers, ensuring that every item on our
                shelves meets our rigorous standards for freshness, taste, and
                sustainability. They are constantly on the lookout for new and
                exciting products to expand our offerings and cater to the
                diverse needs of our customers.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </GridItem>

      <Card>
        <CardHeader>
          <Heading size="md">Thank You for Choosing Us</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Text pt="2" fontSize="sm">
                Thank you for choosing our Online Supermarket for your grocery
                needs. Your trust and satisfaction are our top priorities, and
                we are committed to providing you with the best products and
                service possible. We appreciate your support and look forward to
                serving you again soon!
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card padding={5}>
        <HStack>
          <Heading size="md">Follow us on:</Heading>
          <SlSocialTwitter size={25} />
          <SlSocialFacebook size={25} />
          <SlSocialInstagram size={25} />
        </HStack>
      </Card>
    </Grid>
  </>
);
