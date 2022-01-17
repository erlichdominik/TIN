const express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Category router
// Functionalities:
// get list of all categories
router.get("/", async (req, res) => {
  const data = await prisma.category.findMany({});

  res.json(data);
});
// create new category
// require arguments: name, Colour, toDoCategory??
router.post("/", async (req, res) => {
  if (!(req.body.name || req.body.Colour)) {
    res.send("wrong format, try again");
  }

  const { name, colour } = req.body;

  const category = await prisma.category.create({
    data: {
      name: name,
      colour: colour,
    },
  });

  res.json(category);
});
//delete category with particullar id or name of the category
router.delete("/", async (req, res) => {
  if (!req.body.id) {
    res.send("please, provide category id to delete");
  }

  const { id } = req.body;

  const deletedCategory = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  res.json(deletedCategory);
});

module.exports = router;
