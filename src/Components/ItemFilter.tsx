import {
  Button,
  Select,
  FormControl,
  SimpleGrid,
  FormLabel,
} from "@chakra-ui/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";

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
      <FormControl onSubmit={handleSubmit(onSubmit)} p="30px">
        <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={5}>
          <FormLabel>Select Category</FormLabel>
          <Select {...register("category")}>
            <option value="all" selected>
              All Categories
            </option>
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
    </>
  );
};

export default ItemFilter;
