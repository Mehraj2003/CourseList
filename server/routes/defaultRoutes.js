import express from "express";

const router = express.Router();

router.get("/welcome", (req, res)=>{
    res.status(200).json({message:"Welcome to the course list api", success:true});
    console.log("Server is Up and Running");
});

router.get("/health", (req, res) => {
    res.status(200).send({ message: "Server is UP & Running!", success: true });
  });

export default router;