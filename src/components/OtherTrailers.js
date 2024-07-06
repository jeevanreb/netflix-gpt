import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { API_OPTIONS } from "../utils/constant";
import { toggleSliceView } from "../utils/trailerSlice";

const OtherTrailers = () => {
    const [trailerVideo, setTrailerVideo] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const auth = getAuth();

    const handleClick = () => {
        dispatch(toggleSliceView());
        navigate(`/browse`);
    };

    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            if (json?.results) {
                const filterdata = json.results.filter(video => video.type === 'Trailer');
                const trailer = filterdata.length ? filterdata[0] : json.results[0];
                setTrailerVideo(trailer);
            }
        } catch (error) {
            console.error('Error fetching movie videos:', error);
        }
    };

    useEffect(() => {
        getMovieVideos();
        window.scrollTo(0, 0);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
            }
        });
        
        return () => unsubscribe();
    }, [auth, navigate, id]);

    return (
        <>
            <div className="w-full aspect-video pt-[2%]  px-5 md:mt-0 sm:mt-20 absolute text-white bg-gradient-to-r from-black">
                <button onClick={handleClick} className="bg-red-500 p-2 px-4 rounded-md hover:bg-red-600">Back</button>
            </div>
            <div className="w-full">
                <iframe 
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
};

export default OtherTrailers;
