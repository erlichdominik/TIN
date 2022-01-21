var express = require("express");
var { PrismaClient } = require("@prisma/client");
var router = express.Router();
const prisma = new PrismaClient();

/* GET home page. */
router.get("/", async (request, response, next) => {
  const data = await prisma.doctor.findMany({});

  response.send(data);
});

module.exports = router;
