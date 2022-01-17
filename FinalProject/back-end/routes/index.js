var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET home page. */
router.get("/", async (request, response, next) => {
  const todo = await prisma.toDo.findMany({});

  response.json(todo);
});

router.put("/", async (req, res) => {
  // const todo = await prisma.toDo.create({
  //   data: {
  //     description: "test",
  //     is_done: false,
  //   },
  // });
});

module.exports = router;
