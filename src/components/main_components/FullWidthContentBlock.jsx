import { useRef } from "react"

export default function FullWidthContentBlock() {

    const content = useRef()
    const right = useRef()
    const left = useRef()

    const scrollLeft = () => {
        content.current.scrollLeft -= 1000
    }
    const scrollRight = () => {
        content.current.scrollLeft += 1000
    }




    return (
        <section className="col-span-2 lg:col-span-4  h-[17rem] bg-white flex flex-col justify-between 
        px-3 py-2 relative">
            <h1 className="ml-3 mt-3 font-semibold text-lg">
                Explore more from across the store
            </h1>
            <div className={`opacity-50 hover:opacity-80 hidden md:block absolute h-24 w-16 top-[7rem] 
            right-0 bg-white py-6 px-2 rounded-l`}
            onClick={scrollRight}
            ref={right}>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="right arrow" 
                className="h-full"/>
            </div>
            <div className={`opacity-50 hover:opacity-80 hidden md:block absolute h-24 w-16 top-[7rem] 
            left-0 bg-white py-6 px-2 rounded-r`}
            onClick={scrollLeft}
            ref={left}>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="left arrow" 
                className="rotate-180 h-full"/>
            </div>
            <div className="[&_img]:h-[12rem] [&_img]:w-[12rem] [&_img]:p-1 p-2 flex overflow-auto scrollbar
            scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth "
            ref={content}>
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
                <img src="https://cf.ltkcdn.net/antiques/images/orig/268806-1600x1030-vintage-zippo-lighters-spark-up-your-collection.jpg" alt="" />
            </div>
        </section>
    )
}