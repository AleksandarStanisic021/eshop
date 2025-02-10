"use server";
import { revalidatePath } from "next/cache";
import { CartItem } from "@/types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";

export const addItemToCart = async (data: CartItem) => {
  return { success: true, message: "Item added to cart" };
};
