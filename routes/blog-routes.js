import express from "express";
import {
  deletebyid,
  findtheblogbyid,
  getBlogs,
  putBlogs,
  updateBlogs,
} from "../controllers/blog-controller.js";
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/post", putBlogs);
blogRouter.put("/update/:id", updateBlogs);
blogRouter.get("/:id", findtheblogbyid);
blogRouter.delete("/:id", deletebyid);
export default blogRouter;
