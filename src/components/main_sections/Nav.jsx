import Search from '../nav_components/Search'
import Categories from '../nav_components/Categories'
import DeliveryBanner from '../nav_components/DeliveryBanner'
import BottomMobileNav from '../nav_components/BottomMobileNav'
import Register from '../nav_components/Register'
import Login from '../nav_components/Login'
import Logout from '../nav_components/Logout'
import UpdateInfo from '../nav_components/UpdateInfo'
import TokenCheck from '../nav_components/TokenCheck'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export default function Nav(){

  const [userInfo, setUserInfo] = useState({
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    city: null,
    state: null
  })

  const [authorized, setAuthorized] = useState(false)

  const { REACT_APP_PASSPORT_API } = process.env

  // passport function
  const authenticationCheck = useCallback( async() => {
    const getToken = () => {
      const cookie = document.cookie.split('=')
      const tokenIndex = cookie.findIndex(() => 'token') + 1
      return cookie[tokenIndex]
    }

    const token = getToken()

    // promise
    await axios({
      method: 'post',
      url: REACT_APP_PASSPORT_API,
      data: {
        token : token
      }
    })
    .then(res => {
      setAuthorized(true)
      setUserInfo({
        id: res.data.id,
        email: res.data.email,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        city: res.data.city,
        state: res.data.state,
      })
    })
    .catch(() => {
      setAuthorized(false)
    })
  }, [ REACT_APP_PASSPORT_API ])
    
  
  useEffect(() => {
    authenticationCheck()
  }, [authenticationCheck])


  return (
    <nav className="bg-green-800 ">
      <Router>
        <Routes>
          <Route path='/' element={false} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/update-info' element={<UpdateInfo userInfo={userInfo}/>} />
          <Route path='/token' element={<TokenCheck />} />
        </Routes>

        {/* nav - search */}
        <Search 
          userInfo = {userInfo} 
          authorized = {authorized}/>
        {/* nav - catagories */}
        <Categories />
        {/* nav - deliver to/sign in - mobile only */}
        <DeliveryBanner 
          userInfo = {userInfo} 
          authorized = {authorized}/>
        {/* nav - navigation button - bottom of screen - mobile only */}
        <BottomMobileNav />
      </Router>
    </nav>
  )
}