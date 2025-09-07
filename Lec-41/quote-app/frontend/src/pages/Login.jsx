import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { login as loginApi } from "../api/auth"

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await loginApi(form);
      await login(res.data.token);
      navigate("/"); 
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='min-h-screen'>
      <div className="max-w-2xl mx-auto px-10">
          <div className="border w-10 bg-black text-white text-2xl font-bold text-center mx-auto">CB</div>
          <p className="font-bold text-center text-2xl mt-3.5">Join the CB Community</p>
          <p className="text-center text-sm text-gray-600">CB Community is a community of 3,452,983 amazing developers</p>

          <form onSubmit={submitHandler} className="mt-6">
            <Input onChangeHandler={changeHandler} name={"username"} title={"Username"} type={"text"}/>
            <Input onChangeHandler={changeHandler} name={"password"} title={"Password"} type={"password"}/>
            <button className="w-full bg-[#3B49DF] text-white py-3 mt-4 rounded-lg">Log in</button>
          </form>

          <div className="mt-6">
            <p className="text-sm italic text-gray-500 text-center">By signing in, you are agreeing to our <span className="text-[#3B49DF]">privacy policy</span>, <span className="text-[#3B49DF]">terms of use</span></p>
            <p className="text-sm italic text-gray-500 text-center">and <span className="text-[#3B49DF]">code of conduct</span>.</p>
          </div>

          <hr className="my-6 text-gray-300" />

          <p className="text-gray-800 text-center">New to DEV Community? 
            {/* <span className="text-[#3B49DF]">Create account.</span> */}
            {" "}
            <Link className='text-blue-700' to={"/register"}>Create account.</Link>
          </p>
      </div>
    </div>
  )
}

export default Login