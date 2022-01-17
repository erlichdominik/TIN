import { ToDo } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// repository with all CRUD functionalities require for todo
export const getToDos = async (categoryId: number) => {
  const data: ToDo[] = await prisma.toDo.findMany({
    where: {
      ToDoCategory: {
        some: {
          categoryId: categoryId,
        },
      },
    },
  });
  return data;
};

export const getToDo = async (categoryId: number, toDoId: number) => {};

export const deleteToDo = async (categoryId: number, toDoId: number) => {};

export const updateToDo = async (
  categoryId: number,
  toDoId: number,
  toDo: { description: string; isDone: boolean }
) => {};
