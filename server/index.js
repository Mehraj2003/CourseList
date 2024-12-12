import express from "express";
import defaultRouter from "./routes/defaultRoutes.js";
import bookRouter from "./routes/booksRoute.js";
import courseRouter from "./routes/courseRoute.js";
import mongoose from "mongoose";

const app = express();

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
mongoose
   .connect("mongodb://localhost:27017/courselist")
   .then(() => {
     console.log("Connected to MongoDB");
   })
   .catch((error) => {
       console.error("Error connecting to MongoDB:", error);
   })
app.use(express.json());

app.use("/", defaultRouter);

app.use("/books", bookRouter);
app.use("/courses", courseRouter);