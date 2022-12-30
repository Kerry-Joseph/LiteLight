import FourSetContentBlock from "./components/FourSetContentBlock"
import SingleSetContentBlock from "./components/SingeSetContentBlock"
import FullWidthContentBlock from "./components/FullWidthContentBlock"
import ReturnsAndVisaAd from "./components/ReturnsAndVisaAd"

import lighters from './lighters.json'
import recs from './recommendations.json'

import Banner from "./components/Banner"

export default function Main(){


    const MobileRecs = () => (
        recs.map(rec => {
            return (
                <div className="flex flex-col justify-between">
                    <h1 className="pt-1.5 px-2">
                        {rec.title}
                    </h1>

                    <section
                    style={{backgroundImage: `url(${rec.img})`}}
                    className="h-[8rem] bg-cover bg-center rounded-b-md">

                    </section>
                </div>
            )
        })
    )
    

    return (
        <main className="flex justify-center bg-gray-300 lg:bg-gray-200">
            <main className="relative max-w-[1500px] w-full pb-5">

                <Banner />

                <div
                style={{background: "linear-gradient(0deg, rgba(209, 213, 219, 1) 80%, rgba(1,25,56,0) 100%)"}} 
                className="lg:hidden h-48 w-full bg-gradient-to-t from-gray-300 -mt-10 z-20 [&_div]:h-[11.5rem] 
                [&_div]:min-w-[9rem]  [&_div]:bg-white [&_div]:shadow-md [&_div]:rounded [&_div]:mx-1  
                flex px-1 overflow-x-auto scrollbar">
                    {/* main - recommendations - mobile only */ }
                    <MobileRecs />
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
                    {/* main - content blocks - 4 lighters per block  */}
                    <FourSetContentBlock lighter={lighters.bic} />
                    <FourSetContentBlock lighter={lighters.zippo} />
                    <FourSetContentBlock lighter={lighters.colibri} />
                    <ReturnsAndVisaAd />
                    <FourSetContentBlock lighter={lighters.lotus} />
                    <SingleSetContentBlock lighter={lighters.ronson} />
                    <FourSetContentBlock lighter={lighters.clipper} />
                    <SingleSetContentBlock lighter={lighters.mk} />
                    <FullWidthContentBlock />
                </div>
            </main>
        </main>
    )
}