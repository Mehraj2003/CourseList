import express from "express";
import { getBooks, addBook, updateBook, deleteBook } from "../controller/bookCtroller.js";

const router = express.Router();

router.get("/getBooks", getBooks);
router.post("/addBook", addBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

export default router;

