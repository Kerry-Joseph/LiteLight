export default function ReturnsAndVisaAd() {
    return (
        <section 
        className="flex flex-col h-[25.2rem] md:h-[26.2rem] items-center justify-between text-gray-900">
        {/* main - easy returns & visa add - larger screens only */}
            <div 
            className=" h-[9.4rem] w-full bg-white flex flex-col justify-between p-4 px-5 pb-[1.4rem] pr-10">
                <h1
                className="font-bold text-[1.3rem]">
                    Easy returns
                </h1>
                <p
                className="text-[0.8rem] font-medium text-gray-600">
                    LiteLight has flexible return shipping on orders & gifts
                </p>
                <p
                className="text-[0.8rem] text-cyan-600 font-medium">
                    Learn more
                </p>
            </div>

            {/* visa */}
            <div
            className="bg-[url(https://www.gannett-cdn.com/presto/2021/08/17/USAT/d396978a-8f42-4c6a-8630-00e3d1a540b4-2021_06_04_DEALS_ChaseCC.png?crop=2987,1681,x12,y0&width=2987&height=1681&format=pjpg&auto=webp)]
            h-[15.6rem] w-full lg:max-w-[18.5rem] lg:min-w-[1.5rem] lg:w-full bg-cover bg-center border border-gray-500 p-4 pt-3 flex flex-col 
            justify-between cursor-pointer overflow-hidden">
                <p className="font-bold text-2xl w-5/6 leading-6 text-white leading-7"
                style={{textShadow: "1px 1px 2px black"}}>
                    Earn 2% back at restaurants whether you dine in or take out
                </p>
                <p
                className="font-bold text-lg text-white underline underline-offset-4"
                style={{textShadow: "1px 1px 2px black"}}>
                    Learn more
                </p>
                <p
                className="w-1/4 text-[.8rem] leading-3 font-semibold">
                    Terms and conditions apply
                </p>
                <p
                className="self-end font-black text-black text-xl" 
                style={{textShadow: "1px 1px 2px white"}}>
                    LiteLight
                </p>
            </div>
        </section>

    )
}