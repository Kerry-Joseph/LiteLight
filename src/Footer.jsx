export default function Footer(){
    return (
        <h1 className="">
            <div className="bg-[rgb(55,71,90)] text-white flex items-center justify-center h-12 text-[0.75rem] font-semibold">
                {/* footer - back to top banner button */}
                <p>Back  to top</p>
            </div>
            <div className="[&_h1]:font-semibold flex justify-center [&_li]:text-sm [&_li]:p-1 [&_ul]:px-10 [&_ul]:py-12 bg-[rgb(34,47,62)] text-gray-100 
            [&_ul]:max-w-[18rem] c[&_ul]:cursor-pointer">
                {/* footer - company info */}
                <ul>
                    <h1>Get to Know Us</h1>
                    <li>Careers</li>
                    <li>Amazon Newsletter</li>
                    <li>About Amazon</li>
                    <li>Sustainability</li>
                    <li>Press Center</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>
                <ul>
                    <h1>Make Money with Us</h1>
                    <li>Sell products on Amazon</li>
                    <li>Supply to Amazon</li>
                    <li>Protect & Build Your Brand</li>
                    <li>Become an Affiliate</li>
                    <li>Become a Delivery Driver</li>
                    <li>Start a package delivery business</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Ways to Make Money</li>
                </ul>
                <ul>
                    <h1>Amazon Payment Products</h1>
                    <li>Amazon Rewards Visa Signature Cards</li>
                    <li>Amazon Store Card</li>
                    <li>Amazon Secured Card</li>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Credit Card Marketplace</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Convertyer</li>
                </ul>
                <ul>
                    <h1>Let Us Help You</h1>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates Policies</li>
                    <li>Lite Membership</li>
                    <li>Returns & Replaces</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Your Recalls and Product Safety Alerts</li>
                    <li>Amazon Assistants</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="bg-[rgb(34,47,62)] border-t border-[rgb(55,71,90)] flex justify-center items-center py-7">
                {/* footer - logo/language/country */}
                <h1 className="px-20 font-black text-gray-100 text-xl">
                    LiteLight
                </h1>
                <div className="flex text-gray-300 text-sm font-semibold">
                    <div className="border border-gray-300 flex items-center rounded-sm px-2 mr-2">
                        <img src="https://domotexusa.com/wp-content/uploads/2017/12/DOMOTEX-USA19-icon-globe-white.png" alt="globe" 
                        className="h-7"/>
                        <p>English</p>
                    </div>
                    <div className="flex border-gray-300 items-center border border-white rounded-sm text-xs px-2">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="America" 
                        className="h-4 pr-2"/>
                        <p>United States</p>
                    </div>
                </div>
            </div>
            <div className="bg-[rgb(19,26,34)] flex justify-center py-7">
                {/* footer - tos */}
                <div className="w-[40rem] flex whitespace-nowrap [&_p]:px-4 flex-wrap justify-center text-xs
                font-medium text-gray-300">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Your Ads Privacy Choices</p>
                    <p className="pt-2">
                        © 2022-2023, LiteLight.com, Inc. or its affiliates
                    </p>
                </div>
            </div>
        </h1>
    )
}