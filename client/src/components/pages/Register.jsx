import React, {useState} from 'react'
import TextInput from './TextInput';

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
          <div className="flex space-x-4">
          <TextInput
            type="text"
            label="First Name:"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />

          <TextInput
            type="text"
            label="Last Name:"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>

        <TextInput
          type="date"
          label="Date of Birth:"
          id="dob"
          name="dob"
          value={data.dob}
          onChange={handleChange}
        />

        <TextInput
          label="Email:"
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />

        <TextInput
          label="Password:"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />

        <TextInput
          label="Confirm Password:"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
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
