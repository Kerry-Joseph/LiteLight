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
        setFormSubmitted(true)
        const currentTime = new Date()
        const sinceEpoch = currentTime.getTime()
        const daysInMiliseconds = (days) => {
          return 1000 * 60 * 60 * 24 * days
        }
        document.cookie = `token=${res.data}; expires=${(sinceEpoch + daysInMiliseconds(60)) }`
      })
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
    }
    


    const handleSubmit = async e => {
      e.preventDefault()

      loginUser()
    }
    

    return (
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="login_email" onChange={handleChange} required/>

        <label htmlFor="password">Enter Password</label>
        <input type="password" name="password" id="login_password" onChange={handleChange} required/>

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