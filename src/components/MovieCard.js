import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    console.log("poster path--->",IMG_CDN_URL + posterPath)
    return (
        <div className="w-36 pr-4">
            <img className="rounded-md" alt="card" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;