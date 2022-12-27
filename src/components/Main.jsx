import MainSection from "./main_components/MainSection"

import lighters from './../lighters.json'

import Banner from "./main_components/Banner"

export default function Main(){
    
    return (
        <main className="flex justify-center bg-gray-300 lg:bg-gray-200">
            <main className="relative max-w-[1500px] w-full ">

                <Banner />

                <div
                style={{background: "linear-gradient(0deg, rgba(209, 213, 219, 1) 80%, rgba(1,25,56,0) 100%)"}} 
                className="lg:hidden h-48 w-full bg-gradient-to-t from-gray-300 -mt-10 z-20 [&_div]:h-[11.5rem] 
                [&_div]:min-w-[9rem]  [&_div]:bg-white [&_div]:shadow-md [&_div]:rounded [&_div]:mx-1  
                flex px-1 overflow-x-auto scrollbar">
                    {/* main - recommendations - mobile only */ }
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/Mobile_AD_FORMATS3-1.png"})`}}
                className='h-20 w-full bg-center bg-cover mt-2 md:hidden'>
                    {/* main - banner ad - mobile only */}
                </div>

                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/Adver--Banners--150x750px-RIOT.jpg"})`}}
                className='h-20 w-full bg-center bg-cover mt-2 mb-1 md:hidden'>
                    {/* main - banner ad - mobile only */}
                </div>

                <div
                style={{background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(229, 231, 235) 80%)"}}
                className="hidden lg:block w-full h-96 -mt-96">
                    {/* main - fade div - larger screens only */}
                </div>

                <div
                className="flex flex-col md:grid grid-cols-2 lg:grid-cols-4 md:gap-5 
                lg:-mt-[26.05rem] md:px-5">
                    {/* main - content block - 4 lighters per block  */}
                    {/* <MainSection lighter= */}
                    <MainSection lighter={lighters.bic} />
                    <MainSection lighter={lighters.zippo} />
                    <MainSection lighter={lighters.colibri} />


                    <section 
                    className="flex flex-col h-[25.2rem] md:h-[26.2rem] items-center justify-between text-gray-900">
                    {/* main - easy returns & rewards - larger screens only */}
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

                        
                        <div
                        className="bg-[url(https://www.gannett-cdn.com/presto/2021/08/17/USAT/d396978a-8f42-4c6a-8630-00e3d1a540b4-2021_06_04_DEALS_ChaseCC.png?crop=2987,1681,x12,y0&width=2987&height=1681&format=pjpg&auto=webp)]
                        h-[15.6rem] w-full lg:max-w-[18.5rem] lg:min-w-[1.5rem] lg:w-full bg-cover bg-center border border-gray-500 p-4 pt-3 flex flex-col 
                        justify-between cursor-pointer">
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


                    <MainSection lighter={lighters.lotus} />

                    <section></section>
                    <section></section>
                    <section></section>
                    
                </div>
            </main>
        </main>
    )
}