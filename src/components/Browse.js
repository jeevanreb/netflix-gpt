import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useHookTrending";
import OtherTrailers from "../components/OtherTrailers";
import { useSelector } from "react-redux";
const Browse = () => {
    const showTrailer = useSelector(store => store.trailer)
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    return <div>
    {showTrailer?.showTrailer ?  ( 
        <OtherTrailers />
    ) : (
    <>     
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </>
   )}
    </div>
    }
    export default Browse;