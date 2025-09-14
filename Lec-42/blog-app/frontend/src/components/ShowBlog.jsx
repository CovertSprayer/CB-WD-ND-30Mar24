import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBlog } from '../api/blog';

const ShowBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});

  async function fetchBlog() {
    try {
      const res = await getBlog(params.id);
      setBlog(res.data);
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [])

  return (
    <div className='max-w-[662px] mx-auto' id='blog-content'>
      {/* header */}
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white mr-3">
          {blog?.createdBy?.fullName.split(" ")[0][0] + blog?.createdBy?.fullName.split(" ")[1][0]}
        </div>
        <div>
          <p className="text-sm font-semibold">
            {blog?.createdBy?.fullName || "Test"}
          </p>
          <p className="text-xs text-gray-500">{"date here"}</p>
        </div>
      </div>
      <h1><b>{blog.title}</b></h1>
      <div dangerouslySetInnerHTML={{__html: blog.content}} ></div>
    </div>
  )
}

export default ShowBlog