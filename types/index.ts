import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  schemaForInsertProduct,
} from "@/lib/validator";

export type Product = z.infer<typeof schemaForInsertProduct> & {
  id: string;
  images: string[];
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
