import { useSelector } from "react-redux";
import Movieslist from "./MovieList";

const SecondaryContainer = () => {
   const movies = useSelector(store => store.movies)
   return(
      <div className="bg-black">
      <div className="-mt-96 p-12 relative z-20">
         <Movieslist title={"Now Playing"} movies={movies.nowPlayingMovies} />
         <Movieslist title={"Trending"} movies={movies.nowPlayingMovies} />
         <Movieslist title={"Popular Movies"} movies={movies.nowPlayingMovies} />
         <Movieslist title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />

      </div>
   </div>
   );
}

export default SecondaryContainer;