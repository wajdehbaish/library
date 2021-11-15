const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: { type: String, required: true, minLength: 5 },
  authur: String,
  publish: {
    type: Number,
    max: 2021,
  },
  rate: {
    type: Number,
    default: 0,
    min:0,
    max:5
  },
});

const booksModel = mongoose.model("books", bookSchema);

module.exports = {
  booksModel,
};
