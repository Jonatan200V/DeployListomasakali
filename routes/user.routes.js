const { Router } = require("express");
const {
  createUser,
  getAllUser,
  getUser,
} = require("../controllers/User.controller");
const { auth } = require("../midlleware/Auth.midlleware");
const router = Router();

router.get("/user", auth, getAllUser);
router.get("/user/:id", getUser);
router.post("/user", createUser);
// router.get("/user");

module.exports = router;
