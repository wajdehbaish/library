const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const booksRouter = require("./routes/books.route")

app.use(express.json());

app.use(cors());

app.use("/", booksRouter);



mongoose.connect(
    "mongodb+srv://wajde:123456789@cluster0.lg6xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to DB");
    }
  );
  
  app.listen(process.env.PORT||4000);
  