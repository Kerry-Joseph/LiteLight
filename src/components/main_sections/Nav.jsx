import Search from '../nav_components/Search'
import Categories from '../nav_components/Categories'
import DeliveryBanner from '../nav_components/DeliveryBanner'
import BottomMobileNav from '../nav_components/BottomMobileNav'
import Register from '../nav_components/Register'
import Login from '../nav_components/Login'
import Logout from '../nav_components/Logout'
import TokenCheck from '../nav_components/TokenCheck'

export default function Nav(){

    return (
        <nav className="bg-green-800 ">
            <TokenCheck />
            <Logout />
            <Login />
            <Register />
            {/* nav - search */}
            <Search />
            {/* nav - catagories */}
            <Categories />
            {/* nav - deliver to/sign in - mobile only */}
            <DeliveryBanner />
            {/* nav - navigation button - bottom of screen - mobile only */}
            <BottomMobileNav />
        </nav>
    )
}