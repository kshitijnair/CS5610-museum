const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getFirstMuseum } = require("../database")
const { ObjectId } = require('mongodb');

router.get("/", (req, res) => {
  res.send("Hello Museum Page");
});

router.get('/:id', async (req, res) => {
  console.log('-------------------musum 1----------------')
  const data = await getFirstMuseum({_id : ObjectId(req.params.id)});
  res.json(data);
})

module.exports = router;
