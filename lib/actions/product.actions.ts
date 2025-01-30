"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainOblect } from "../utils";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainOblect(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
