const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Mongo DB Strict Mode
mongoose.set("strictQuery", true);

// Server Instance
const app = express();

// Request Parsers
app.use(cors());
app.use(express.json());

const taskManagerRouter = require("./routers/taskManagerRouter");

app.use("/tasks", taskManagerRouter);

// Database Connection Establishment
mongoose
  .connect(
    "mongodb+srv://revanth180:7NlBBUfheV9Nw23b@cluster0.sjn6rgx.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connection established"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("app listening to the port 5000");
});
