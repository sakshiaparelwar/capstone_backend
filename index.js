const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const eventRoute = require("./routes/eventRoute");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to database");
});
db.on("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use("/events", eventRoute);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
