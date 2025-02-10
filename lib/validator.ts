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

export const SignInFormSchema = z.object({
  email: z.string().email("invalid email address"),
  password: z.string().min(6, "Password must be 6 characters"),
});

export const SignUpFormSchema = z
  .object({
    name: z.string().min(3, "At least 3 characters in name"),
    email: z.string().email("invalid email address"),
    password: z.string().min(6, "Password must be 6 characters"),
    confirmPassword: z.string().min(6, "Password must be confirmed"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Product slug is required"),
  qty: z.number().int().nonnegative("Cant be negative"),
  image: z.string().min(1, "Product image is required"),
  price: currency,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, "Session cart id is required"),
  userId: z.string().optional().nullable(),
});
