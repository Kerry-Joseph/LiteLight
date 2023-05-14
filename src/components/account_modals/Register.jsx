import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
 
export default function Register() {

  const [formState, SetFormState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })
  
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = e => {
    SetFormState(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
   
  


  const { REACT_APP_REGISTER_API, REACT_APP_LOGIN_API } = process.env
  

  const createUser = () => {
    axios.post(REACT_APP_REGISTER_API, {
      first_name: formState.first_name,
      last_name: formState.last_name,
      email: formState.email,
      password: formState.password
    })
    .then(() => {

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

    })
    .catch(err => {
      setErrorMessage(err.response.data.errors.email ? err.response.data.errors.email.msg :  err.response.data.errors.password.msg)
    })
  }
  
  
  const handleSubmit = e => {
    e.preventDefault()
    
    createUser()
  }


    
  const doPasswordsMatch = () => {
    const password = document.querySelector("#register_password")
    const confirmPassword = document.getElementById("confirm_password")
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

        <label htmlFor="first_name" className="p-2 font-semibold text-white">
          First Name
        </label>
        <input type="text" name="first_name" id="first_name" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="last_name" className="p-2 font-semibold text-white">
          last Name
        </label>
        <input type="text" name="last_name" id="last_name" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium" />

        <label htmlFor="email" className="p-2 font-semibold text-white">
          email
        </label>
        <input type="text" name="email" id="register_email" onChange={handleChange} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="password" className="p-2 font-semibold text-white">
          Create Password
        </label>
        <input type="password" name="password" id="register_password" onChange={(e) => {doPasswordsMatch(); handleChange(e)}} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <label htmlFor="password" className="p-2 font-semibold text-white">
          Confirm Password
        </label>
        <input type="password" name="confirm_password" id="confirm_password"  onChange={(e) => {doPasswordsMatch(); handleChange(e)}} required
        className="mx-2 p-2 px-4 rounded-md focus:outline-0 font-medium"/>

        <div className="bg-green-700 mt-3 pt-3 p-2 grow flex flex-col justify-between md:rounded-bl-md lg:rounded-b-md">
          <input type="submit" value="Create Account" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg"/>
          <p className="text-white text-sm mt-2">
            Already have an account?
          </p>
          <Link to="/login" className="text-white text-xs font-semibold visited:text-purple-800 underline
          text-blue-800 w-fit">
            Login to your account
          </Link>
        </div>
      </form>
    </div>
  )
}