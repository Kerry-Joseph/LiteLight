import { Link, useLocation } from 'react-router-dom'


export default function Search({ userInfo, authorized }) {

  const loginOrLogout = () => {
    if(authorized){
      return "/logout"
    } else {
      return "/login"
    }
  }

  
  return (
    <div 
    className="flex justify-center py-1 md:bg-green-900">

        <div className="hidden md:flex ml-4 mr-1 border border-transparent hover:border-white items-center font-black 
        text-white rounded-sm px-2 text-2xl cursor-pointer">
            {/* logo */}
            <h1>LiteLight</h1>
        </div>

        <div className="hidden lg:flex relative text-white min-w-max ml-1 mr-5 border border-transparent hover:border-white 
        rounded-sm pl-6 pr-2  justify-end flex-col cursor-pointer">
            {/* add delivery address */}
            <img src="/nav_images/pin.png" alt="map dropper" 
            className="h-4 absolute left-1.5 top-[1.3rem]"/>
            <p 
            className="text-xs font=semibold leading-[.5rem] pb-1.5">
                { userInfo.first_name ? userInfo.first_name : 'Sign-in' }<br/>
                <span className="text-sm font-bold">
                  { userInfo.city ? `${userInfo.city}, ${userInfo.state}` : 'Add Delivery Address'}
                  
                </span>
            </p>
        </div>

        <div className="w-full relative my-1 px-3.5 md:px-0">
            {/* search bar */}

            <img src="/nav_images/magnifying-glass.png" 
            alt="search magnifier" 
            className="h-6 absolute left-6 md:left-3 top-2.5 md:hidden"/>

            <div className="hidden md:flex items-center absolute bg-gray-200 rounded-l-md h-full w-14 border-r-[1px] 
            border-gray-400 p-3 hover:bg-gray-300 cursor-pointer">
                <p
                className="text-xs">
                    All
                </p>
                <img src="/nav_images/down-arrow.png" 
                alt="down arrow" 
                className="h-6 opacity-75"/>
            </div>

            <input type="text" name="search" id="" placeholder="Search LiteLight" 
            className="w-full py-2 pl-10 md:pl-16 pr-28 rounded-md border-[2px] border-gray-300 md:border-0 font-medium 
            focus:outline-0 caret-green-800"/>

            <div className="hidden md:flex items-center absolute right-0 top-0 bg-orange-300 rounded-r-md h-full w-12 p-3
             hover:bg-orange-400 cursor-pointer">
                <img src="/nav_images/magnifying-glass.png" 
                alt="search magnifier" 
                className="h-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>

            <img src="/nav_images/scan.png" alt="scan" 
            className="md:hidden h-6 absolute right-20 top-2.5 cursor-pointer"/>
            <img src="/nav_images/mic.png" 
            alt="mic" 
            className="md:hidden h-[2.1rem] absolute right-8 top-1 cursor-pointer"/>
        </div>



        <div className="hidden lg:flex border border-transparent hover:border-white ml-5 mr-1 px-2 pr-4 items-center 
        text-white min-w-max relative rounded-sm cursor-pointer">
            {/* language */}
            <img src="/nav_images/flag.png" 
            alt="american flag" 
            className="h-4"/>
            <p
            className="font-bold px-1">
                EN
            </p>
            <img src="/nav_images/down-arrow.png" alt="down arrow" 
            className="h-7 absolute -right-1 top-2.5"/>
        </div>



        <Link to={useLocation().pathname === loginOrLogout() ? "/" : loginOrLogout()} className="hidden md:flex relative text-white min-w-max ml-1 mr-1 border border-transparent hover:border-white 
        rounded-sm pl-2 pr-6 justify-end flex-col cursor-pointer">
            {/* accounts & lists */}
            <p 
            className="text-xs leading-[.5rem] pb-1.5">
                { userInfo.first_name ? `${userInfo.first_name} ${userInfo.last_name}` : 'Sign-in' }<br/>
                <span className="text-sm font-bold"> Accounts & Lists</span>
            </p>
            <img src="/nav_images/down-arrow.png" alt="down arrow" 
            className="h-7 absolute -right-0.5 top-4.5"/>
        </Link>


       
        <div className="hidden lg:flex relative text-white min-w-max ml-1 mr-1 border border-transparent hover:border-white 
        rounded-sm px-2 justify-end flex-col cursor-pointer">
            {/* returns and orders */}
            <p 
            className="text-xs leading-[.5rem] pb-1.5">
                Returns<br/>
                <span className="text-sm font-bold">& Orders</span>
            </p>
            
        </div>



        <div className="hidden md:flex relative text-white min-w-max ml-1 mr-5 border border-transparent hover:border-white 
        rounded-sm px-2 justify-center items-end cursor-pointer">
            {/* cart */}
            <img src="/nav_images/cart.png" alt="cart" 
            className="h-8 mb-[.55rem]"/>
            <p
            className="text-sm font-bold py-[.3rem]">
                Cart
            </p>
        </div>

    </div>
  )
}