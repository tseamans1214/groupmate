const express = require('express');
const { hello } = require('../controllers/user');
const router = express.Router();
const userController = require('../controllers/user');
const authController = require("../controllers/auth");
const { ensureAuth } = require("../middleware/auth");


router.get('/api', hello.hello);
router.post('/api/user', userController.postUser);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;