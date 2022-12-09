const express = require("express");
const router = express.Router();
const axios = require("axios");
const { ObjectId } = require("mongodb");
const {
  getProfile,
  getFirstUser,
  removeUser,
  editUser,
  addUserProfile
} = require("../database");

router.get("/", (req, res) => {
  res.send("Hello ProfilePage");
});

router.get("/user/:userID", async (req, res) => {
  console.log("user id is: ", req.params.userID);
  const user = await getProfile("oops");
  res.json(user);
});

router.post("/addUser", async (req, res) => {
  // console.log("adding new user...");
  let sub = req.body.sub
  sub = sub.slice(6, sub.length);
  const filter = { _id: ObjectId(sub)};
  // console.log(sub)

  // const response = await addUserProfile(req.body);
  const response = await editUser(filter, req.body);
  res.json(response)
});

router.get("/getFirstUser", async (req, res) => {
  const user = await getFirstUser();
  res.json(user);
});

router.delete("/deleteUser", async (req, res) => {
  console.log("deleting item");
  const id = req.query["id"];
  console.log(id);
  let result = await removeUser({ _id: ObjectId(id) });
  console.log(result);
  res.json(result);
});

router.post("/updateUser", async (req, res) => {
  const updatedData = {
    name: `${req.body.name}`,
    email: `${req.body.email}`,
    phone: `${req.body.phone}`,
  };
  console.log(updatedData, req.body.id);
  console.log("**************");
  let response = await editUser({ _id: ObjectId(req.body.id) }, updatedData);
  console.log(response);
  res.json(response);
});

module.exports = router;
