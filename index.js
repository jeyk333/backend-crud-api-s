const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Port
const port = process.env.PORT || 5000;

//Routes
const communityRouter = require("./routes/community");

//Middlewares
app.use(express.json());
app.use("/community", communityRouter);

//DB Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected "));

//App listening to the port
app.listen(port, () => console.log("app running successfully"));
