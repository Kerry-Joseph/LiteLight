export default function Categories() {
  return (
    <div 
    className="flex overflow-x-auto w-screen text-white scrollbar 
    [&_p]:border-[1px] [&_p]:rounded-sm [&_p]:border-transparent hover:[&_p]:border-white
    [&_p]:px-2 [&_p]:py-1 [&_p]:ml-1 [&_p]:my-1 [&_p]:min-w-max [&_p]:cursor-pointer
    font-medium text-sm md:bg-green-700 lg:px-2">
        <p className="hidden md:flex items-center">
            <img src="/nav_images/menu.png" alt="menu icon" 
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