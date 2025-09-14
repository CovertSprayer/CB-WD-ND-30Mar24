const BlogModel = require("../models/Blog.model");
const UserModel = require("../models/User.model");
const api = require("../utils/api");

module.exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    if(!title) throw new Error("title is required");
    if(!content) throw new Error("content is required");

    const userId = req.user.id;
    const user = await UserModel.findById(userId, "-password");
    const blog = await BlogModel.create({title, content, createdBy: userId});
    blog.createdBy = user;
    api.success(res, blog);
  } catch (error) {
    api.error(res, error);
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    if(!blogId) throw new Error("blog id required")

    const blog = await BlogModel.findById(blogId).populate("createdBy", "_id username email fullName");
    api.success(res, blog);
  } catch (error) {
    api.error(res, error)
  }
}

module.exports.getAllBlogs = async(req, res) => {
  try {
    const blogs = await BlogModel.find().populate("createdBy", "_id username email fullName");
    api.success(res, blogs);
  } catch (error) {
    api.error(res, error)
  }
}

module.exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, content } = req.body;
    if(!blogId) throw new Error("blog id required");

    const data = {};
    if(title) data.title = title;
    if(content) data.content = content;

    if(Object.keys(data).length == 0){
      throw new Error("content or title is required");
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, data, { new: true });
    api.success(res, updatedBlog)
  } catch (error) {
    api.error(res, error)
  }
}

module.exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    if(!blogId) throw new Error("blog id required");

    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);
    api.success(res, deletedBlog);
  } catch (error) {
    api.error(res, error);
  }
}
