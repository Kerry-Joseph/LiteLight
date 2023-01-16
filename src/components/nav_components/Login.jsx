import axios from "axios"
import { useState } from "react"

export default function Login() {
  
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  
  function LoginForm() {
    const [formState, SetFormState] = useState({
      email: '',
      password: ''
    })
    
    const handleChange = e => {
      SetFormState(prev => ({
        ...prev, [e.target.id]: e.target.value
      }))
    }
    
    
    const { REACT_APP_LOGIN_API } = process.env
    

    const loginUser = () => {
      axios.post(REACT_APP_LOGIN_API, {
        email: formState.email,
        password: formState.password
      })
      .then(res => {
        console.log (res)
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
      
      loginUser()
      
      setFormSubmitted(true)
    }
    

    return (
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" onChange={handleChange} required/>

        <label htmlFor="password">Enter Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} required/>

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
    <div className="absolute top-20 left-[24rem] z-20 bg-red-400">
      {!formSubmitted ? <LoginForm /> : <RegisterFormSubmitted />}
    </div>
  )
}