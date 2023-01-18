import axios from "axios"
import { useCallback, useEffect, useState } from "react"


export default function TokenCheck() {

  const [auth, setAuth] = useState(false)

  const { REACT_APP_PASSPORT_API } = process.env



  const authenticationCheck = useCallback(async() => {
    const getToken = () => {
      const cookie = document.cookie.split('=')
      const tokenIndex = cookie.findIndex(() => 'token') + 1
      return cookie[tokenIndex]
    }
    const token = getToken()

    axios({
      method: 'post',
      url: REACT_APP_PASSPORT_API,
      data: {
        token : token
      }
    })
    .then(res => {
      setAuth(true)
    })
    .catch(err => {
      setAuth(false)
      console.log(err)
    })
  }, [REACT_APP_PASSPORT_API])
    
    


  useEffect (() => {
    authenticationCheck()
  }, [authenticationCheck])
  
  


  return (
    <h1 className="absolute top-20 left-[50rem] z-20 bg-red-400">
      {auth ? 'authorized' : "unathorized"}
    </h1>
  )
}