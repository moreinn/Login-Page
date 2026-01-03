const express = require("express");
const authController = require('../controllers/auth');
const mysql = require("mysql");



const router = express.Router();


router.post('/login', authController.register);

router.post('/register', authController.register);

router.post('/profile', authController.register);

module.exports = router;
