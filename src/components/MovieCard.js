import { IMG_CDN_URL } from "../utils/constant";
import { toggleSliceView } from "../utils/trailerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ posterPath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMovieTrailer = (posterPath) => {
        // Toggle movie trailer
        dispatch(toggleSliceView());
        navigate(`${posterPath.id}`);
    };

    return (
        <div className="w-36 pr-4 shadow-lg cursor-pointer hover:w-40" onClick={() => handleMovieTrailer(posterPath)}>
            <img className="rounded-md" alt="card" src={IMG_CDN_URL + posterPath?.poster_path} />
        </div>
    );
};

export default MovieCard;
