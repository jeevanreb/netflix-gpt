const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-full aspect-video pt-[20%]  px-20 md:mt-0 sm:mt-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="hidden md:inline-block text-3xl font-bold">{title}</h1>
            <p className="hidden md:block py-6 text-md w-1/2">{overview}</p>
            <div className="hidden md:block">
                <button className="bg-white bg-opacity-100 text-black p-2 px-10 text-lg bg-opacity-50 rounded-md hover:bg-opacity-70">▶ Play</button>
                <button className="mx-2 bg-gray-600 bg-opacity-100  text-white p-2 px-10 text-lg bg-opacity-50 rounded-md hover:bg-opacity-70">« More Info »</button>
            </div>
        </div>
    )
}
export default VideoTitle;