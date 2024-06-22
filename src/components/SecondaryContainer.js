import { useSelector } from "react-redux";
import Movieslist from "./MovieList";

const SecondaryContainer = () => {
   const movies = useSelector(store => store.movies)
   return(
      <div className="bg-black">
      <div className="md:-mt-64 sm:mt-0 md:p-12 sm:p-2 relative z-20">
         <Movieslist title={"Now Playing"} movies={movies.nowPlayingMovies} />
         <Movieslist title={"Popular Movies"} movies={movies.popularMovies} />
         <Movieslist title={"Trending"} movies={movies.trendingMovies} />
         <Movieslist title={"Top Rated Movies"} movies={movies.nowPlayingMovies} />

      </div>
   </div>
   );
}

export default SecondaryContainer;