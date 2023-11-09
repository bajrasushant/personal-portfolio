import { useState } from "react"
import { Link } from "react-router-dom"
import TextInput from "./TextInput";

const Login = () => {
  const [data, setData] = useState({
    username:"",
    password:"",
  });

  const handleSubmit = () => {
    console.log('Submit');
  }

  const handleChange= (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <section className="bg-white p-8 xs:shadow-md shadow-none rounded">
          <h1 className="text-2xl mb-2 font-bold">Welcome</h1>

          <p className="text-gray-600 mb-3">
            Login to your account to continue.
          </p>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <div className="">
                <TextInput label="Username:" onChange={handleChange} id="username" value={data.username} name="username" />
              </div>

              <div className="">
                  <TextInput label="Password:" name="password" onChange={handleChange} type='password' id="password" value={data.password} />

              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button type="submit" className="w-[35%] bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Login</button>
            <div className="flex text-sm mt-3">
            <p className="text-gray-600 pr-1">
            Don't have an account? </p>
            <Link to="/register" className="text-green-500 hover:text-green-700 font-bold"> Sign up</Link>
            </div>
            </div>

          </form>
      </section>
    </div>
  )
}

export default Login
