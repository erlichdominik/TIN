import { Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// repository with all CRUD functionalities require for category

export const getCategories = async () => {
  const data: Category[] = await prisma.category.findMany();
  return data;
};

export const getCategory = async (categoryId: number) => {};

export const deleteCategory = async (categoryId: number) => {};

export const editCategory = async (
  categoryId: number,
  category: { name: string }
) => {};
