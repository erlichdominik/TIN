const express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Category router
// Functionalities:
// get list of all categories
router.get("/", async (req, res) => {});
// create new category
router.post("/", async (req, res) => {});
//delete category with particullar id or name of the category
router.delete("/", async (req, res) => {});

module.exports = router;
