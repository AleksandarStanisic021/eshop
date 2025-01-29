import { z } from "zod";
import { formatNumber } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))),
    "Not valid format"
  );

export const schemaForInsertProduct = z.object({
  name: z.string().min(3, "name is reqired with at least 3 chars"),
  slug: z.string().min(3, "slug is reqired with at least 3 chars"),
  category: z.string().min(3, "category is reqired with at least 3 chars"),
  brand: z.string().min(3, "brand is reqired with at least 3 chars"),
  description: z
    .string()
    .min(5, "description is reqired with at least 5 chars"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "One product at least required"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
