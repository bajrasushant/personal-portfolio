import React, {useState} from 'react'

const Register = () => {
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    dob:"",
    username:"",
    email: "",
    password:"",
    confirmPassword:"",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="bg-white p-8 xs:shadow-md shadow-none rounded">
        <h1 className="text-2xl mb-2 font-bold">Create an Account</h1>
         <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={data.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-1 px-1"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default Register
