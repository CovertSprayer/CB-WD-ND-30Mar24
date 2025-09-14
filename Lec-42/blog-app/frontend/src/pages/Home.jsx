import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Button from '../components/Button';
import { createBlog, getBlogs } from '../api/blog';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const handleClick = async (e) => {
    try {
      const res = await createBlog({ title, content: value });
      setBlogs(prev => [res.data, ...prev]);
      setTitle("");
      setValue("");
    } catch (error) {
      alert(error.response?.data?.message)
    }
  }

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await getBlogs();
        setBlogs(res.data)
        console.log(res)
      } catch (error) {
        alert(error.response?.data?.message)
      }
    }
    fetchBlogs();
  }, []);

  return (
    <>
      <div className='max-w-[662px] mx-auto'>
        <div>
          <textarea 
            onChange={changeHandler} 
            name='title' 
            className='w-full p-2 text-xl font-bold' 
            rows={1} 
            placeholder='Title goes here...' 
            value={title}
          />
          <ReactQuill 
            theme="snow" 
            value={value}
            onChange={setValue}
            modules={{
              toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
              ],
            }}
          />
          <Button className="mt-2" onClick={handleClick}>Publish</Button>
        </div>

        <div className='mt-4'>
          {
            blogs.map(blog => (
              <BlogCard key={blog._id} blog={blog}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home