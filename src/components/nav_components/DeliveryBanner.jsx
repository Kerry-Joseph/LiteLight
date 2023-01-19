import { Link, useLocation } from "react-router-dom"

export default function DeliveryBanner() {
  return (
    <Link to={useLocation().pathname === '/login' ? "/" : "/login"}
    className="bg-green-800 relative md:hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/16/16199.png" alt="map dropper" 
        className="absolute h-4 left-2 top-3"/>
        <p
        className="py-3 px-7 text-white text-xs font-medium">
            Sign-in / Add Delivery Address
        </p>
    </Link>
  )
}