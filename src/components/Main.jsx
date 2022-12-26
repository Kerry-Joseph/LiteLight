import { useEffect, useState } from "react"

import MainSection from "./main_components/MainSection"

import lighters from './../lighters.json'

export default function Main(){
    const [bannerImage, setBannerImage] = useState({
        imageOne : 'hidden',
        imageTwo : 'hidden',
        imageThree : 'hidden',
        imageFour : 'hidden',
        imageFive : 'block'
    })

  

    useEffect(() => {   
        setTimeout(() => {
            if(bannerImage.imageOne === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    imageTwo : 'block',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    imageFive : 'hidden'
                })
            } else
            if(bannerImage.imageTwo === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    imageTwo : 'hidden',
                    imageThree : 'block',
                    imageFour : 'hidden',
                    imageFive : 'hidden'
                })
            } else
            if(bannerImage.imageThree === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    imageTwo : 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'block',
                    imageFive : 'hidden'
                })
            } else 
            if(bannerImage.imageFour === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    imageTwo : 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    imageFive : 'block'
                })
            } else 
            if(bannerImage.imageFive === 'block'){
                setBannerImage({
                    imageOne : 'block',
                    imageTwo : 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    imageFive : 'hidden'
                })
            } 
        }, 5000)
    }, [bannerImage])

  

    return (
        <main className="flex justify-center bg-gray-300 lg:bg-gray-200">
            <main className="relative max-w-[1500px] w-full ">

                <div className="[&_div]:h-64 lg:[&_div]:h-[42rem] [&_div]:w-full">
                    {/* main - banner images */}
                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImgOne.webp"})`}}
                    className={`${bannerImage.imageOne} bg-[center_top_-7rem] lg:bg-cover lg:bg-[center_top_-24rem]`}></div>
                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImageTwo.jpg"})`}}
                    className={`${bannerImage.imageTwo} bg-center bg-top bg-cover lg:bg-[center_top_-10rem]`}></div>
                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImgThree.jpg"})`}}
                    className={`${bannerImage.imageThree} bg-center lg:bg-cover`}></div>
                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImageFour.png"})`}}
                    className={`${bannerImage.imageFour} bg-cover`}></div>
                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImageFive.png"})`}}
                    className={`${bannerImage.imageFive} bg-cover bg-center`}></div>
                </div>

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
                className="flex flex-col [&_section]:w-full [&_section]:h-[31rem] lg:[&_section]:h-[26.2rem] [&_section]:bg-white [&_section]:my-1
                md:[&_section]:my-0 md:grid grid-cols-2 lg:grid-cols-4 md:gap-5 lg:-mt-[26rem] md:px-5">
                    {/* main - content block - 4 lighters per block  */}
                    {/* <MainSection lighter= */}
                    <MainSection lighter={lighters.bic} />
                    <MainSection lighter={lighters.zippo} />
                    <MainSection lighter={lighters.colibri} />
                    <MainSection lighter={lighters.lotus} />
                    <section></section>
                    <section></section>
                    <section></section>
                    <section></section>
                    
                </div>
            </main>
        </main>
    )
}