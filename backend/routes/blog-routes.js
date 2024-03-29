import express from "express";
import { getBlogs, putBlogs, updateBlogs } from "../controllers/blog-controller.js";
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/post", putBlogs);
blogRouter.put("/update", updateBlogs);
export default blogRouter;
