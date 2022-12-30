export default function FourSetContentBlock({ lighter }) {
    return (
        <section className=" flex-col flex px-5 py-[1rem]
        w-full h-[31rem] lg:h-[26.2rem] bg-white my-1 md:my-0 text-gray-900">

            <h2 className="pb-2 font-bold text-2xl lg:text-xl ">
                {lighter.brand}
            </h2>



            <div
            className="w-full h-full relative flex flex-col cursor-pointer">

                <div
                style={{backgroundImage: `url(${lighter.image[0]})`}} 
                className='h-full bg-cover mt-2 lg:mt-1 bg-center'>
                </div>

                <span className="relative bottom-0 text-ellipsis w-full 
                whitespace-nowrap overflow-hidden text-[1.6rem] lg:text-[2rem] font-medium">
                    {lighter.name[0]}
                </span>
                
            </div>
           

            <div className="flex items-center h-10 font-medium  text-[.9rem] text-cyan-600
            hover:text-orange-600 cursor-pointer">
                <p>See more from {lighter.brand}</p>
            </div>
            
        </section>
    )
}