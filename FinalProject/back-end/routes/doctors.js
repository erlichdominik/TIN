const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

/*
API ROUTE FOR DOCTOR TABLE [api/v1/doctors]
AVAILABLE METHODS: CRUD
*/

//GET ALL DOCTORS
router.get("/", async (req, res, next) => {
  const data = await prisma.doctor.findMany({});

  res.send(data);
});

// GET DOCTOR BY ID
router.get("/:doctorId", async (req, res, next) => {
  const { doctorId } = req.params;

  const data = await prisma.doctor.findUnique({
    where: {
      doctor_id: parseInt(doctorId, 10),
    },
  });
  res.send(data);
});

// ADD NEW DOCTOR
router.post("/", async (req, res, next) => {
  const { firstName, lastName, mail } = req.body;
  const newDoctor = await prisma.doctor.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      mail: mail,
    },
  });

  res.status(200).send(newDoctor);
});

module.exports = router;
