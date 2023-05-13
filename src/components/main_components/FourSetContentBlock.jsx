export default function FourSetContentBlock({ lighter }) {
    return (
        <section className="grid grid-cols-2 p-4 px-5 gap-x-4 grid-rows-[auto_1fr_1fr_auto] 
        content-between w-full h-[31rem] lg:h-[26.2rem] bg-white my-1 md:my-0 text-gray-900">

            <h2 className="col-span-2 pb-2 font-bold text-2xl lg:text-xl ">
                {lighter.brand}
            </h2>



            <div
            className="w-full h-full relative lg:flex lg:flex-col cursor-pointer">

                <div
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + lighter.image[0]})`}} 
                className='h-[10.2rem] lg:h-[8.3rem] bg-cover mt-2 lg:mt-1 bg-center'>
                </div>

                <span className="absolute lg:relative bottom-0 text-ellipsis w-full 
                whitespace-nowrap overflow-hidden text-[.75rem] font-medium">
                    {lighter.name[0]}
                </span>
                
            </div>

           

            <div
            className="w-full h-full relative lg:flex lg:flex-col cursor-pointer">

                <div
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + lighter.image[1]})`}} 
                className='h-[10.2rem] lg:h-[8.3rem] bg-cover mt-2 lg:mt-1 bg-center'>
                </div>

                <span className="absolute lg:relative bottom-0 text-ellipsis w-full 
                whitespace-nowrap overflow-hidden text-[.75rem] font-medium">
                    {lighter.name[1]}
                </span>
                
            </div>

           

            <div
            className="w-full h-full relative lg:flex lg:flex-col cursor-pointer">

                <div
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + lighter.image[2]})`}} 
                className='h-[10.2rem] lg:h-[8.3rem] bg-cover mt-2 lg:mt-1 bg-center'>
                </div>

                <span className="absolute lg:relative bottom-0 text-ellipsis w-full 
                whitespace-nowrap overflow-hidden text-[.75rem] font-medium">
                    {lighter.name[2]}
                </span>
                
            </div>

           

            <div
            className="w-full h-full relative lg:flex lg:flex-col cursor-pointer">

                <div
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + lighter.image[3]})`}} 
                className='h-[10.2rem] lg:h-[8.3rem] bg-cover mt-2 lg:mt-1 bg-center'>
                </div>

                <span className="absolute lg:relative bottom-0 text-ellipsis w-full 
                whitespace-nowrap overflow-hidden text-[.75rem] font-medium">
                    {lighter.name[3]}
                </span>
                
            </div>

           

            <div className="col-span-2 flex items-center h-10 font-medium  text-[.9rem] text-cyan-600
            hover:text-orange-600 cursor-pointer">
                <p>See all {lighter.brand}</p>
            </div>
            
        </section>
    )
}