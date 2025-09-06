import { useState } from 'react'
import Input from '../components/Input'

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const changeHandler = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandler = (e) => {
    e.preventDefault();
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

      </div>
    </div>
  )
}

export default Register