const express = require("express");
const router = express.Router();
const axios = require("axios");

const { getProfile } = require('../database')

const database = require('../database');

router.get("/", (req, res) => {
  res.send("Hello ProfilePage");
});

router.get("/user/:userID", async (req, res) => {
  console.log("user id is: ", req.params.userID)
  const user = await getProfile("oops");
  res.json(user);
})

router.post("/user/newuser", async (req, res) => {
  console.log("adding new user...");


})

module.exports = router;
