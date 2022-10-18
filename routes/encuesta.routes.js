const { Router } = require("express");
const {
  createEncuesta,
  getAllEncuesta,
  existEncuest,
  dateEncuest,
} = require("../controllers/Encuesta.controller");

const router = Router();

router.get("/create/form", getAllEncuesta);
// router.get("/completed/:id", existEncuest);
router.post("/create/form", existEncuest, createEncuesta);
router.post("/date/form", dateEncuest);

module.exports = router;
