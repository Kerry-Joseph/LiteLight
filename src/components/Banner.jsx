import { useState, useEffect } from "react"


export default function Banner() {


    const [bannerImage, setBannerImage] = useState({
        imageOne : 'hidden',
        zippo65 : 'hidden',
        imageThree : 'hidden',
        imageFour : 'hidden',
        torches : 'block'
    })


    useEffect(() => {   
        setTimeout(() => {
            if(bannerImage.imageOne === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    zippo65 : 'block',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    torches : 'hidden'
                })
            } else
            if(bannerImage.zippo65 === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    zippo65 : 'hidden',
                    imageThree : 'block',
                    imageFour : 'hidden',
                    torches : 'hidden'
                })
            } else
            if(bannerImage.imageThree === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    zippo65 : 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'block',
                    torches : 'hidden'
                })
            } else 
            if(bannerImage.imageFour === 'block'){
                setBannerImage({
                    imageOne : 'hidden',
                    zippo65 : 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    torches : 'block'
                })
            } else 
            if(bannerImage.torches === 'block'){
                setBannerImage({
                    imageOne : 'block',
                    zippo65: 'hidden',
                    imageThree : 'hidden',
                    imageFour : 'hidden',
                    torches : 'hidden'
                })
            } 
        }, 5000)
    }, [bannerImage])



    return (
        <div className="[&_div]:h-64 lg:[&_div]:h-[42rem] [&_div]:w-full">
            {/* main - banner images */}
            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImgOne.webp"})`}}
            className={`${bannerImage.imageOne} bg-[center_top_-7rem] lg:bg-cover lg:bg-[center_top_-24rem]`}></div>

            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/zippo_65.jpg"})`}}
            className={`${bannerImage.zippo65} bg-center bg-top bg-left bg-cover  
            lg:bg-[center_top_-18rem] pl-3 pt-14 lg:pl-28 xl:pl-52 lg:pt-20 md:pl-16 md:pt-8 font-lora`}>
                {/* ZIPPO 65 */}
                <h1 className="underline underline-offset-4 text-xl font-semibold w-1/2 tracking-tight
                md:text-4xl lg:text-5xl md:font-bold md:-ml-10 ">
                    VINTAGE SET
                </h1>
                <h2 className="font-black text-gray-900 w-1/3 md:text-xl">
                    Year 65
                </h2>
                <p className="absolute w-1/3 py-8 md:font-bold md:text-lg md:-ml-10">
                    50% off
                    <span className="text-xs text-green-500 pl-2"
                    style={{textShadow : "1px 1px 2px white"}}>
                        Lite Members exclusive
                    </span> 
                </p>
            </div>

            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImgThree.jpg"})`}}
            className={`${bannerImage.imageThree} bg-center lg:bg-cover`}></div>
            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/banImageFour.png"})`}}
            className={`${bannerImage.imageFour} bg-cover`}></div>
            
            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/torches.png"})`}}
            className={`${bannerImage.torches} bg-cover bg-center flex justify-between lg:justify-start flex-col
            text-white p-10 pb-16 md:bg-[center_top_-11rem] lg:pl-[30rem] lg:pt-20 z-0`}>
                {/* TORCHES */}
                <h1 className="text-2xl md:text-5xl md:font-bold tracking-wide font-semibold">
                    50% off Torches
                </h1>
                <h2 className="self-end lg:self-start lg:mt-4 text-xl underline underline-offset-4 font-medium
                cursor-pointer">
                    Tuesday Deals
                    <img src="https://www.freeiconspng.com/uploads/curved-white-arrow-png-0.png" alt="Arrow" 
                    className="hidden lg:block h-5 rotate-90 absolute left-[38.7rem] top-[9.4rem]"/>
                </h2>
            </div>
        </div>
    )
}