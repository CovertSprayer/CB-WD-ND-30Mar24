import axios from "axios";

const API_URL = "http://localhost:5000/api";

export async function login(data) {
  const res = await axios.post(`${API_URL}/auth/login`, data);
  return res.data;
}

export async function register(data) {
  const res = await axios.post(`${API_URL}/auth/register`, data);
  return res.data;
}

export async function getMe(token) {
  const res = await axios.get(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
