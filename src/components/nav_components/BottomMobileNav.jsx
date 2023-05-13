export default function BottomMobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 border-t border-gray-300 h-14 w-full z-20 
    [&_img]:h-8 flex justify-around items-center bg-white">
        <img src="/nav_images/house.png" alt="house icon" />
        <img src="/nav_images/profile-icon.jpg" alt="person icon" />
        <img src="/nav_images/cart.png" alt="cart" />
        <img src="/nav_images/menu.png" alt="menu icon" />
    </div>
  )
}