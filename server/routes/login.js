const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  res.send("Hello LoginPage");
});

router.post('/register', (req, res) => {
  res.send("register post");
});

router.get('/signin', (req, res) => {
  res.send("signin get");
});

module.exports = router;
