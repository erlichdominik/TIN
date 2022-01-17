const express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// TODO router
// functionalities:
// get list of all todos in particullar category
router.get("/", async (req, res) => {});
// create new todo in particullar category
router.post("/", async (req, res) => {});
// delete todo in particullar category by id
router.delete("/", async (req, res) => {});

module.exports = router;
