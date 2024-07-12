import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const ContactPage = () => (
  <>
    <Card margin="50px">
      <CardHeader>
        <Heading size="lg">Contact Us</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <FormControl>
            <FormLabel>Your name</FormLabel>
            <Input type="email" maxWidth="1000px" />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" maxWidth="1000px" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Your message" maxWidth="1000px" />
        </Box>
      </CardBody>
    </Card>
  </>
);
