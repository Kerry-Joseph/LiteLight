import Search from '../nav_components/Search'
import Categories from '../nav_components/Categories'
import DeliveryBanner from '../nav_components/DeliveryBanner'
import BottomMobileNav from '../nav_components/BottomMobileNav'
import Register from '../nav_components/Register'
import Login from '../nav_components/Login'
import Logout from '../nav_components/Logout'
import TokenCheck from '../nav_components/TokenCheck'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from 'react-router-dom'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export default function Nav(){

  const [authorized, setAuthorized] = useState(false)

  const { REACT_APP_PASSPORT_API } = process.env

  const authenticationCheck = useCallback( async() => {
    const getToken = () => {
      const cookie = document.cookie.split('=')
      const tokenIndex = cookie.findIndex(() => 'token') + 1
      return cookie[tokenIndex]
    }

    const token = getToken()

    await axios({
      method: 'post',
      url: REACT_APP_PASSPORT_API,
      data: {
        token : token
      }
    })
    .then(res => {
      setAuthorized(true)
    })
    .catch(err => {
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
          <Route path='/register' element={<Register />} />
          <Route path='/token' element={<TokenCheck />} />
        </Routes>

        { authorized === true ? <Logout /> : false}
        {/* nav - search */}
        <Search />
        {/* nav - catagories */}
        <Categories />
        {/* nav - deliver to/sign in - mobile only */}
        <DeliveryBanner />
        {/* nav - navigation button - bottom of screen - mobile only */}
        <BottomMobileNav />

      </Router>
        
        
        
        
    </nav>
  )
}