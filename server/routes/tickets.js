const express = require("express");
const router = express.Router();
const axios = require("axios");
const { ObjectId } = require('mongodb');
const { getTickets, purchaseTicket } = require('../database')

router.get("/", (req, res) => {
    res.send("Hello to Ticketing server");
  });

router.get('/tickets', async (req, res) => {
    const data = await getTickets();
    res.json(data);
})

router.post("/purchase", async (req, res) => {
    console.log("------------>>>>", req.body)
    const response = await purchaseTicket(req.body);
    res.json(response);
})

module.exports = router;
