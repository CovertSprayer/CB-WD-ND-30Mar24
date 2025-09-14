import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { useAuth } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import ShowBlog from "./components/ShowBlog"

const Protected = ({children}) => {
  const {isAuthenticated} = useAuth();
  
  return (
    isAuthenticated ? <> {children}</> : <Navigate to={"/login"} replace/>
  )
}

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-[#F6F6F6]">
      <div className="bg-white border-b border-gray-400 mb-10">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={
          <Protected>
            <Home/>
          </Protected>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/blogs/:id" element={<ShowBlog/>} />
      </Routes>
    </div>
  )
}

export default App