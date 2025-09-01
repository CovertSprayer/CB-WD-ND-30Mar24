import { Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"


// React hooks
/**
 * useState
 * useEffect
 * 
 * useParams
 * useNavigate
 * useContext
 * useRef
 * 
 * useCallback
 * useMemo 
 */

const App = () => {
  return (
    <div>
      {/* <Products/> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>

    </div>
  )
}

export default App