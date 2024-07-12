import {
  Button,
  Select,
  FormControl,
  SimpleGrid,
  FormLabel,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  category: z.string(),
});

type CategoryFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: CategoryFormData) => void;
}

const ItemFilter = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl p="30px">
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={5}>
            <FormLabel>Select Category</FormLabel>
            <Select {...register("category")}>
              <option value="all">All Categories</option>
              <option value="grocery">Grocery</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="skin_care">Skin Care Products</option>
            </Select>
            <Button colorScheme="blue" size="sm" width="60px" type="submit">
              Apply
            </Button>
          </SimpleGrid>
        </FormControl>
      </form>
    </>
  );
};

export default ItemFilter;
