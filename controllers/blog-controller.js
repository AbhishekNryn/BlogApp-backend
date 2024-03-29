import Blog from "../model/Blog.js";

export const getBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "blog not found" });
  }
  res.status(200).json({ blogs });
};

export const putBlogs = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingBlog;
  try {
    existingBlog = await Blog.findOne({ title });
  } catch (error) {
    console.log(error);
  }
  if (existingBlog) {
    return res.status(400).json({ message: "blog title alreay taken" });
  }

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ blog });
};

export const updateBlogs = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "unable to update the blog" });
  }
  return res.status(200).json({ blog });
};
