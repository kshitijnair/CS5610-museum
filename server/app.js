const express = require("express");
const route = express.Router();
const axios = require("axios");

const app = express();
const PORT = 8000;

const homeRouter = require("./routes/home");
const profileRouter = require("./routes/profile");
const detailsRouter = require("./routes/details");
const loginRouter = require("./routes/login");
const searchRouter = require("./routes/search");

app.use("/home", homeRouter);
app.use("/profile", profileRouter);
app.use("/details", detailsRouter);
app.use("/login", loginRouter);
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
