//import sampleData from "./sample-data";
import { prisma } from "@/db/prisma";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
}

main();
