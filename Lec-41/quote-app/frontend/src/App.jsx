import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { useAuth } from "./context/AuthContext"

const Protected = ({children}) => {
  const {isAuthenticated} = useAuth();
  
  return (
    isAuthenticated ? <> {children}</> : <Navigate to={"/login"} replace/>
  )
}

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F6F6]">
      <Routes>
        <Route path="/" element={
          <Protected>
            <Home/>
          </Protected>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App