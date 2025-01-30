import { z } from "zod";
import { schemaForInsertProduct } from "@/lib/validator";

export type Product = z.infer<typeof schemaForInsertProduct> & {
  id: string;
  images: string[];
  rating: string;
  createdAt: Date;
};
