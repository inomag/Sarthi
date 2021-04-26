const express = require("express");
const { signup, login, logout } = require("../../controllers/auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.get("/signout", logout);

module.exports = router;