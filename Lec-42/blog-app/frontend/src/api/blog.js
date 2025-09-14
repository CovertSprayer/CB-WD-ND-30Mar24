import api from "./index";

// export const createBlog = async (data) => {
//   const res = await axios.post(`${API_URL}/blogs`, data, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}` || null
//     }
//   });
//   return res.data;
// }

export const createBlog = async (data) => {
  const res = await api.post("/blogs", data);
  return res.data;
}

export const getBlog = async (blogId) => {
  const res = await api.get(`/blogs/${blogId}`);
  return res.data;
}

export const getBlogs = async () => {
  const res = await api.get(`/blogs`);
  return res.data;
}

export const updateBlog = async (id, data) => {
  const res = await api.put(`/blogs/${id}`, data);
  return res.data;
}

export const deleteBlog = async (id) => {
  const res = await api.delete(`/blogs/${id}`);
  return res.data;
}