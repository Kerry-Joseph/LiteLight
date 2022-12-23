export default function Nav(){

    const Search = () => {
        return (
            <div 
            className="flex justify-center py-2 px-3">
                <div className="w-full">
                    <img src="https://icons.veryicon.com/png/o/internet--web/common-icons-for-web-pages/01-magnifying-glass.png" alt="search magnifier" 
                    className="h-6 absolute left-5 top-5"/>
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/phoenix-project-icon-library/scan-59.png" alt="scan" 
                    className="h-6 absolute right-20 top-5"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_microphone_vouce_sound-512.png" alt="mic" 
                    className="h-[2.1rem] absolute right-8 top-[.89rem]"/>
                    <input type="text" name="search" id="" placeholder="Search LiteLight" 
                    className="w-full py-2 pl-10 pr-28 rounded-md border-[2px] border-gray-300 font-medium 
                    focus:outline-0 caret-green-800"/>
                </div>
            </div>
        )
    }

    const Categories = () => {
        return (
            <div 
            className="flex overflow-x-auto w-screen text-white [&_p]:mx-4 [&_p]:my-2 [&_p]:min-w-max
            scrollbar">
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
            </div>
        )
    }

    const DeliveryBanner = () => {
        return (
            <div 
            className="bg-green-700 relative">
                <img src="https://cdn-icons-png.flaticon.com/512/16/16199.png" alt="map dropper" 
                className="absolute h-6 left-4 top-3"/>
                <p
                className="py-3 px-12 text-white">
                    Sign-in / Add Delivery Address
                </p>
            </div>
        )
    }

    return (
        <nav className="bg-green-800">
            {/* nav - search */}
            <Search />
            {/* nav - catagories */}
            <Categories />
            {/* nav - deliver to/sign in - mobile only */}
            <DeliveryBanner />
            {/* nav - navigation button - bottom of screen - mobile only */}
        </nav>
    )
}