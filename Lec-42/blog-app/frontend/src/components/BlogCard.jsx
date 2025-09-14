import { useNavigate } from "react-router";
import { FaRegBookmark, FaHeart, FaRegComment } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const naviagte = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white mr-3">
          {blog.createdBy?.fullName?.split(" ")[0][0] + blog.createdBy?.fullName?.split(" ")[1][0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{blog.createdBy?.fullName}</p>
          <p className="text-xs text-gray-500">{"date here"}</p>
        </div>
      </div>

      {/* title and tags */}
      <h2
        onClick={() => {
          naviagte(`/blogs/${blog._id}`)
        }}
        className="text-xl font-bold mb-2 hover:text-[#3B49DF] cursor-pointer"
      >
        {blog.title}
      </h2>
      <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
        {["#Nodejs", "#WebDev", "#Reactjs"].map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      {/* Reactions and Comments */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <FaHeart className="text-red-500" /> {blog.reactions || 7} Reactions
          </span>
          <span className="flex items-center gap-2">
            <FaRegComment /> {blog.comments || 16} Comments
          </span>
        </div>

        <button className="text-gray-500 hover:text-black">
          <FaRegBookmark />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;