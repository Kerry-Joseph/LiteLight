import { Link, useLocation } from "react-router-dom"

export default function DeliveryBanner({ userInfo, authorized }) {

  const loginOrLogout = () => {
    if(authorized){
      return "/logout"
    } else {
      return "/login"
    }
  }

  const displayedText = () => {
    if(userInfo.first_name && !userInfo.city){
      return 'Add delivery address'
    } else if(userInfo.first_name && userInfo.city){
      return `${userInfo.first_name}, ${userInfo.last_name} | ${userInfo.city}, ${userInfo.state}` 
    } else {
      return 'Sign-in / Add delivery address'
    }
  }

  return (
    <Link to={useLocation().pathname === loginOrLogout() ? "/" : loginOrLogout()}
    className="bg-green-800 relative md:hidden">
        <img src="/nav_images/pin.png" alt="map dropper" 
        className="absolute h-4 left-2 top-3"/>
        <p
        className="py-3 px-7 text-white text-xs font-medium">
            { displayedText() }
        </p>
    </Link>
  )
}