export default function Nav(){

    const Search = () => {
        return (
            <div 
            className="flex justify-center py-1 md:bg-green-900">

                <div className="hidden md:flex ml-4 mr-1 border border-transparent hover:border-white items-center font-black 
                text-white rounded-sm px-2 text-2xl cursor-pointer">
                    {/* logo */}
                    <h1>LiteLight</h1>
                </div>



                <div className="hidden lg:flex relative text-white min-w-max ml-1 mr-5 border border-transparent hover:border-white 
                rounded-sm pl-6 pr-2  justify-center flex-col cursor-pointer">
                    {/* devliver to */}
                    <img src="https://cdn-icons-png.flaticon.com/512/16/16199.png" alt="map dropper" 
                    className="h-4 absolute left-1.5 top-5"/>
                    <p 
                    className="text-sm font-medium">
                        Sign-in
                    </p>
                    <p
                    className="text-sm font-bold">
                        Add Delivery Address
                    </p>
                </div>



                <div className="w-full relative my-1 px-3.5 md:px-0">
                    {/* search bar */}

                    <img src="https://icons.veryicon.com/png/o/internet--web/common-icons-for-web-pages/01-magnifying-glass.png" 
                    alt="search magnifier" 
                    className="h-6 absolute left-6 md:left-3 top-2.5 md:hidden"/>

                    <div className="hidden md:flex items-center absolute bg-gray-200 rounded-l-md h-full w-14 border-r-[1px] 
                    border-gray-400 p-3 hover:bg-gray-300 cursor-pointer">
                        <p
                        className="text-xs">
                            All
                        </p>
                        <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/arrow-small-down-512.png" 
                        alt="down arrow" 
                        className="h-6 opacity-75"/>
                    </div>

                    <input type="text" name="search" id="" placeholder="Search LiteLight" 
                    className="w-full py-2 pl-10 md:pl-16 pr-28 rounded-md border-[2px] border-gray-300 md:border-0 font-medium 
                    focus:outline-0 caret-green-800"/>

                    <div className="hidden md:flex items-center absolute right-0 top-0 bg-orange-300 rounded-r-md h-full w-12 p-3
                     hover:bg-orange-400 cursor-pointer">
                        <img src="https://icons.veryicon.com/png/o/internet--web/common-icons-for-web-pages/01-magnifying-glass.png" 
                        alt="search magnifier" 
                        className="h-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    </div>

                    <img src="https://icons.veryicon.com/png/o/miscellaneous/phoenix-project-icon-library/scan-59.png" alt="scan" 
                    className="md:hidden h-6 absolute right-20 top-2.5 cursor-pointer"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_microphone_vouce_sound-512.png" 
                    alt="mic" 
                    className="md:hidden h-[2.1rem] absolute right-8 top-1 cursor-pointer"/>
                </div>



                <div className="hidden lg:flex border border-transparent hover:border-white ml-5 mr-1 px-2 pr-4 items-center 
                text-white min-w-max relative rounded-sm cursor-pointer">
                    {/* language */}
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" 
                    alt="american flag" 
                    className="h-4"/>
                    <p
                    className="font-bold px-1">
                        EN
                    </p>
                    <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/arrow-small-down-512.png" alt="down arrow" 
                    className="h-7 absolute -right-1 top-2.5"/>
                </div>



                <div className="hidden md:flex relative text-white min-w-max ml-1 mr-1 border border-transparent hover:border-white 
                rounded-sm pl-2 pr-6 justify-center flex-col cursor-pointer">
                    {/* accounts and lists */}
                    <p 
                    className="text-sm font-medium">
                        Sign-in /
                    </p>
                    <p
                    className="text-sm font-bold">
                        Accounts & Lists
                    </p>
                    <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/arrow-small-down-512.png" alt="down arrow" 
                    className="h-7 absolute -right-0.5 top-5"/>
                </div>


               
                <div className="hidden lg:flex relative text-white min-w-max ml-1 mr-1 border border-transparent hover:border-white 
                rounded-sm px-2 justify-center flex-col cursor-pointer">
                    {/* returns and orders */}
                    <p 
                    className="text-sm font-medium">
                        Returns
                    </p>
                    <p
                    className="text-sm font-bold">
                        & Orders
                    </p>
                </div>



                <div className="hidden md:flex relative text-white min-w-max ml-1 mr-5 border border-transparent hover:border-white 
                rounded-sm px-2 justify-center items-end cursor-pointer">
                    {/* cart */}
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" 
                    className="h-8 mb-2"/>
                    <p
                    className="text-sm font-bold py-1">
                        Cart
                    </p>
                </div>

            </div>
        )
    }

    const Categories = () => {
        return (
            <div 
            className="flex overflow-x-auto w-screen text-white scrollbar 
            [&_p]:border-[1px] [&_p]:rounded-sm [&_p]:border-transparent hover:[&_p]:border-white
            [&_p]:px-2 [&_p]:py-1 [&_p]:ml-1 [&_p]:my-1 [&_p]:min-w-max [&_p]:cursor-pointer
            font-medium text-sm md:bg-green-700 lg:px-2">
                <p className="hidden md:flex items-center">
                    <img src="https://static.thenounproject.com/png/67738-200.png" alt="menu icon" 
                    className="h-5"/>
                    <span className="font-bold px-1">
                        All
                    </span>
                </p>
                <p>Lite Deals</p>
                <p>Lighter Travel Guide</p>
                <p>Plastic Lighters</p>
                <p>Metal Lighters</p>
                <p>Butane Torches</p>
                <p>Electric Coil Lighters</p>
                <p>Electric Arc Lighters</p>
                <p>Permanent Matches</p>
                <p>Candle Torches</p>
                <p>Pipe Lighters</p>
                <p>Zippo</p>
                <p>Bic</p>
                <p>Ronson</p>
                <p>Colibri</p>
                <p>Clipper</p>
                <p>MK</p>
                <p>Scripto</p>
                <p className="hidden lg:block absolute right-0 bg-green-800 md:bg-green-700">
                    Same-Day Delivery on gifts
                </p>
            </div>
        )
    }

    const DeliveryBanner = () => {
        return (
            <div 
            className="bg-green-700 relative md:hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/16/16199.png" alt="map dropper" 
                className="absolute h-4 left-2 top-3"/>
                <p
                className="py-3 px-7 text-white text-xs font-medium">
                    Sign-in / Add Delivery Address
                </p>
            </div>
        )
    }

    const BottomMobileNav = () => {
        return (
            <div className="md:hidden fixed bottom-0 border-t border-gray-300 h-14 w-full z-20 
            [&_img]:h-8 flex justify-around items-center bg-white">
                <img src="data:image/png;base64,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" alt="house icon" />
                <img src="https://louisville.edu/enrollmentmanagement/images/person-icon/image" alt="person icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
                <img src="https://static.thenounproject.com/png/67738-200.png" alt="menu icon" />
            </div>
        )
    }

    return (
        <nav className="bg-green-800 ">
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