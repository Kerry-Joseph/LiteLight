import axios from "axios"
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom'

export default function Login() {
  
 
  const [formState, SetFormState] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = e => {
    SetFormState(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  
  const { REACT_APP_LOGIN_API } = process.env
  
  const loginUser = () => {

    axios.post(REACT_APP_LOGIN_API, {
      email: formState.email,
      password: formState.password
    })
    .then(res => {
      console.log (res.data)
      const currentTime = new Date()
      const sinceEpoch = currentTime.getTime()
      const daysInMiliseconds = (days) => {
        return 1000 * 60 * 60 * 24 * days
      }
      document.cookie = `token=${res.data}; expires=${(sinceEpoch + daysInMiliseconds(60)) }`
    })
    .then(() => {
      window.location.href = 'http://localhost:3000'
    })
    .catch(err => {
      console.log(err)
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()

    loginUser()
  }
  

  const getToken = () => {
    const cookie = document.cookie.split('=')
    const tokenIndex = cookie.findIndex(() => 'token') + 1
    return cookie[tokenIndex]
  }

  

  return (
    <div className="absolute top-[8.5rem] z-20 md:top-[3.5rem] md:right-0 lg:right-[11rem]">
      <form onSubmit={handleSubmit} 
      className="flex flex-col w-screen bg-green-800 md:w-[20rem] md:rounded-b-md md:border-b md:border-l md:bg-green-900 
      lg:border-r lg:rounded-b-md">
        <label htmlFor="email" className="p-2 font-semibold text-white">
          Enter Email
        </label>
        <input type="text" name="email" id="login_email" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="password" className="p-2 font-semibold text-white">
          Enter Password
        </label>
        <input type="password" name="password" id="login_password" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0"/>

        <div className="bg-green-700 mt-3 pt-3 p-2 grow flex flex-col justify-between md:rounded-bl-md lg:rounded-b-md">
          <input type="submit" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg"/>
          <p className="text-white text-sm mt-2">
            Don't have an account?
          </p>
          <Link to="/register" className="text-white text-xs font-semibold visited:text-purple-600 underline
          text-blue-600 w-fit">
            Create an account
          </Link>
        </div>
      </form>
      {getToken() === "" || undefined ? false : <Navigate to="/" />}
    </div>
  )
}