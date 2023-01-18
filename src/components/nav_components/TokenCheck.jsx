import axios from "axios"
import { useState } from "react"


export default function TokenCheck() {

  const [auth, setAuth] = useState(false)

  const { REACT_APP_PASSPORT_API } = process.env

  // const authenticationCheck = () => {
  //   axios.get(REACT_APP_PASSPORT_API)
  //     .then(res => {
  //       setAuth(true)
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       setAuth(false)
  //       console.log(err)
  //     })
  // }

  return (
    <h1 className="absolute top-20 left-[80rem] z-20 bg-red-400">
      {auth ? 'authorized' : "unathorized"}
    </h1>
  )
}