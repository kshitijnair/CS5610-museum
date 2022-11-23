const express = require("express");
const axios = require("axios");
const { connectToDB } = require("./database");

const app = express();
const PORT = 8080;

const homeRouter = require("./routes/home");
const profileRouter = require("./routes/profile");
const detailsRouter = require("./routes/details");
const loginRouter = require("./routes/login");
const searchRouter = require("./routes/search");

app.use(express.json());
app.use(express.urlencoded());

app.use("/home", homeRouter);
app.use("/profile", profileRouter);
app.use("/details", detailsRouter);
app.use("/login", loginRouter);
app.use("/search", searchRouter);

app.get("/", (req, res) => {
  res.send("NodeJS server running...");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectToDB();
});
