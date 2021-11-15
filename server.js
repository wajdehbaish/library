const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const booksRouter = require("./routes/books.route")

app.use(express.json());

app.use(cors());

app.use("/", booksRouter);



mongoose.connect(
    "mongodb://localhost/libaryDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to DB");
    }
  );
  
  app.listen(4000);
  