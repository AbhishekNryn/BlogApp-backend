import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://narayanabhishek090:backendsocial@cluster0.594svlv.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("connected to db"));
