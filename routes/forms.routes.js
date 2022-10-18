const { Router } = require("express");
const { signIn, signUp } = require("../controllers/forms.controller");
const router = Router();

router.post("/login", signIn);
router.post("/logout", signUp);

module.exports = router;
