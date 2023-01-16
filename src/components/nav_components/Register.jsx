import axios from "axios"
import { useState } from "react"

export default function Register() {
  
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  
  
  function RegisterForm() {
    const [formState, SetFormState] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    })
    

    const handleChange = e => {
      SetFormState(prev => ({
        ...prev, [e.target.id]: e.target.value
      }))
    }
    

    const { REACT_APP_REGISTER_API } = process.env
    

    const createUser = () => {
      axios.post(REACT_APP_REGISTER_API, {
        first_name: formState.first_name,
        last_name: formState.last_name,
        email: formState.email,
        password: formState.password
      })
      .then(res => {
        console.log ({
          success: true,
          response: res
        })
      })
      .catch(err => {
        console.log({
          success: false,
          response: err
        })
      })
    }
    
    
    const handleSubmit = e => {
      e.preventDefault()
      
      createUser()
      
      setFormSubmitted(true)
    }

  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" id="first_name" onChange={handleChange} required/>

        <label htmlFor="last_name">last Name</label>
        <input type="text" name="last_name" id="last_name" onChange={handleChange} required/>

        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" onChange={handleChange} required/>

        <label htmlFor="password">Create Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} required/>

        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="confirm_password" id="confirm_password" />

        <input type="submit" />
      </form>
    )
  }


  
  function RegisterFormSubmitted() {
    return (
      <>USER CREATED</>
    )
  }



  return (
    <div className="absolute top-20 left-40 z-20 bg-red-400">
      {!formSubmitted ? <RegisterForm /> : <RegisterFormSubmitted />}
    </div>
  )
}