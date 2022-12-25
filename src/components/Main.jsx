import { useEffect, useState } from "react"

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
        <main className="flex justify-center">
            <main className="relative max-w-[1480px] w-full bg-gray-300">

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
                className='h-20 w-full bg-center bg-cover mt-2 md:hidden'>
                    {/* main - banner ad - mobile only */}
                </div>

                <div
                style={{background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 80%)"}}
                className="hidden lg:block w-full h-96 -mt-96">
                    {/* main - larger screen fade div */}
                </div>
                {/* main - content block - 4 lighters per block  */}
            </main>
        </main>
    )
}