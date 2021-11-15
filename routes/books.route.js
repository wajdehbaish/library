const express=require("express")
const router=express.Router()
const booksModel=require("../model/libary.model").booksModel


router.get("/getbooks", (req, res) => {
  booksModel.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
});

router.post("/createbooks", async (req, res) => {
  const { bookName, publish, authur, rate } = req.body;

  const newbooks = new booksModel({
    bookName: bookName,
    publish: publish,
    authur: authur,
    rate: rate,
  });
  try {
    await newbooks.save();
    res.send("book created");
  } catch (error) {
    res.send(error);
  }
});

router.put("/updateBook/:id", async (req, res) => {
  const { bookName, publish, authur, rate } = req.body;

  const newbooks = {
    bookName: bookName,
    publish: publish,
    authur: authur,
    rate: rate,
  };
  try {
    await booksModel.findByIdAndUpdate(req.params.id, newbooks, {
      new: true,
      runValidators: true,
    });
    res.send("book created");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  try {
    let deletedBook = await booksModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(deletedBook);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports=router;