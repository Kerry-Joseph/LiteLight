import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"
 
export default function UpdatePassword({ userInfo, authorized }) {

  const [formState, SetFormState] = useState({
    current_password: '',
    new_password: ''
  })

  const [errorMessage, setErrorMessage] = useState("")
  

  const handleChange = e => {
    SetFormState(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
    


  const { REACT_APP_UPDATE_PASSWORD_API } = process.env
  

  const updateUser = () => {
    axios.put(REACT_APP_UPDATE_PASSWORD_API, {
      email: userInfo.email,
      current_password: formState.current_password,
      new_password: formState.new_password,
    })
    .then(() => {
      document.cookie = "token="
      window.location.href = 'https://litelight.vercel.app/'
    })
    .catch(err => {
      setErrorMessage(err.response.data.errors.email ? err.response.data.errors.email.msg :  err.response.data.errors.new_password.msg)
    })
  }
  
  
  const handleSubmit = e => {
    e.preventDefault()
    updateUser()
  }

  const doPasswordsMatch = () => {
    const password = document.querySelector("#new_password")
    const confirmPassword = document.getElementById("confirm_new_password")
    if(password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do no match.")
    } else {
      confirmPassword.setCustomValidity('')
    }
  }

  return (
    <div className="absolute top-[8.5rem] z-20 md:top-[3.5rem] md:right-0 lg:right-[11rem]">
      
      <form onSubmit={handleSubmit} className="flex flex-col w-screen bg-green-800 md:w-[20rem] md:rounded-b-md md:border-b md:border-l md:bg-green-900 
      lg:border-r lg:rounded-b-md">

        <p className="px-2 font-bold text-red-500">
          {errorMessage}
        </p>


        <label htmlFor="current_password" className="p-2 font-semibold text-white">
          Current Password
        </label>
        <input type="password" name="current_password" id="current_password" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="new_password" className="p-2 font-semibold text-white">
          Create New Password
        </label>
        <input type="password" name="new_password" id="new_password" onChange={(e) => {doPasswordsMatch(); handleChange(e)}} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="confirm_new_password" className="p-2 font-semibold text-white">
          Confirm New Password
        </label>
        <input type="password" name="confirm_new_password" id="confirm_new_password"  onChange={(e) => {doPasswordsMatch(); handleChange(e)}} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        

        <div className="bg-green-700 mt-3 pt-3 p-2 grow flex flex-col justify-between md:rounded-bl-md lg:rounded-b-md">
          <input type="submit" value="Update Password" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg"/>
        </div>
      </form>
      {authorized ? false : <Navigate to="/" />}
    </div>
  )
}