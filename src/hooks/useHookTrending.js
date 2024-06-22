import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingmovies = useSelector(store => store.movies.trendingMovies);
    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        if(!trendingmovies) {
        getTrendingMovies();
        }
    },[])
}
export default useTrendingMovies;