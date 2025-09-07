import { useState } from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/auth'

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await register(form);
      if(data.success) {
        navigate("/login")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="max-w-xl mx-auto p-10 bg-white rounded-2xl">
          <p className='font-bold text-lg'>Create your account</p>
          <form onSubmit={submitHandler} className="mt-6">
            <Input onChangeHandler={changeHandler} name={"fullName"} title={"Name"}/>
            <Input onChangeHandler={changeHandler} name={"username"} title={"Username"}/>
            <Input onChangeHandler={changeHandler} name={"email"} title={"Email"} type={"email"}/>
            <Input onChangeHandler={changeHandler} name={"password"} title={"Password"} type={"password"}/>
            <Input onChangeHandler={changeHandler} name={"confirmPassword"} title={"Confirm Password"} type={"password"}/>
            <button className="px-6 font-semibold bg-[#3B49DF] text-white py-3 mt-4 rounded-lg">Sign up</button>
          </form>

          <p className='mt-3'>Already Registered? <Link className='text-blue-700' to={"/login"}>Login</Link></p>
      </div>
    </div>
  )
}

export default Register