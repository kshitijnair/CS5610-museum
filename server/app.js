const express = require("express");
const axios = require("axios");
const { connectToDB } = require("./database");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
// const PORT = 3005;

const homeRouter = require("./routes/home");
const profileRouter = require("./routes/profile");
const museumRouter = require("./routes/museum");
const loginRouter = require("./routes/login");
const searchRouter = require("./routes/search");
const ticketsRouter = require("./routes/tickets");
const { urlencoded } = require("express");

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use("/home", homeRouter);
app.use("/profile", profileRouter);
app.use("/museum", museumRouter);
app.use("/login", loginRouter);
app.use("/search", searchRouter);
app.use("/tickets", ticketsRouter);

app.get("/", (req, res) => {
  res.send("NodeJS server running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectToDB();
});
