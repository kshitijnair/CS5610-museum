const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getAllMuseums } = require("../database");

router.get("/", (req, res) => {
  res.send("Hello HomePage");
});

router.get('/museums', async (req, res) => {
  const museums = await getAllMuseums();
  res.json(museums);
})

module.exports = router;
