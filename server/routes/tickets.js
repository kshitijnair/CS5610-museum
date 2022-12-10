const express = require("express");
const router = express.Router();
const axios = require("axios");
const { ObjectId } = require("mongodb");
const {
  getTickets,
  purchaseTicket,
  deleteTicket,
  updateTicket,
  getTicketsForUser
} = require("../database");

router.get("/", (req, res) => {
  res.send("Hello to Ticketing server");
});

router.get("/tickets", async (req, res) => {
  const data = await getTickets();
  res.json(data);
});

router.get("/tickets/:userID", async (req, res) => {
  console.log('user id for tickets is : ', req.params.userID)
  const data = await getTicketsForUser(req.params.userID);
  res.json(data);
});

router.post("/purchase", async (req, res) => {
  console.log("purchasing----------->>>>", req.body);
  const response = await purchaseTicket(req.body);
  res.json(response);
});

router.delete("/delete", async (req, res) => {
  console.log("deleting...", req.body);
  const response = await deleteTicket(req.body.id);
  res.json(response);
});

router.put("/update", async (req, res) => {
  console.log("updating", req.body["_id"]);
  const response = await updateTicket(
    { _id: ObjectId(req.body["_id"]) },
    req.body
  );
  res.json(response);
});

module.exports = router;
