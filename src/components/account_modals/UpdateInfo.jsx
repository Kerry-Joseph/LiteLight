import axios from "axios"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
 
export default function UpdateInfo({ userInfo, authorized }) {

  const [formState, SetFormState] = useState({
    first_name: '',
    last_name: '',
    city: '',
    state: ''
  })
  

  const handleChange = e => {
    SetFormState(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
    


  const { REACT_APP_UPDATE_INFO_API } = process.env
  

  const updateUser = () => {
    axios.put(REACT_APP_UPDATE_INFO_API, {
      first_name: formState.first_name,
      last_name: formState.last_name,
      city: formState.city.charAt(0).toUpperCase() + formState.city.substring(1),
      state: formState.state.toUpperCase(),
      email: userInfo.email
    })
    .then(() => {
      window.location.href = 'http://localhost:3000'
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState)
    updateUser()
  }

  return (
    <div className="absolute top-[8.5rem] z-20 md:top-[3.5rem] md:right-0 lg:right-[11rem]">
      
      <form onSubmit={handleSubmit} className="flex flex-col w-screen bg-green-800 md:w-[20rem] md:rounded-b-md md:border-b md:border-l md:bg-green-900 
      lg:border-r lg:rounded-b-md">
        <label htmlFor="first_name" className="p-2 font-semibold text-white">
          First Name
        </label>
        <input type="text" name="first_name" id="first_name" onChange={handleChange} placeholder={userInfo.first_name} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="last_name" className="p-2 font-semibold text-white">
          Last Name
        </label>
        <input type="text" name="last_name" id="last_name" onChange={handleChange} placeholder={userInfo.last_name} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium" />

        <label htmlFor="city" className="p-2 font-semibold text-white">
          City
        </label>
        <input type="text" name="city" id="city" onChange={handleChange} placeholder={userInfo.city} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="state" className="p-2 font-semibold text-white">
          State
        </label>
        <input type="text" name="state" id="state" onChange={handleChange} maxLength={2} minLength={2} placeholder={userInfo.state} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <div className="bg-green-700 mt-3 pt-3 p-2 grow flex flex-col justify-between md:rounded-bl-md lg:rounded-b-md">
          <input type="submit" value="Update Account" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg"/>
          <Link to="/update-password" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg mt-2 text-center pt-1.5">
            Create New Password
          </Link>
        </div>
      </form>
      {authorized ? false : <Navigate to="/" />}
    </div>
  )
}