import MovieCard from "./MovieCard";

const Movieslist = ({ title, movies }) => {
    console.log(movies);
    return (
        <div style={{ padding: '1.5rem', overflowX: 'hidden' }}>
            <h1 style={{ fontSize: '1.875rem', paddingBottom: '0.75rem', color: 'white' }}>{title}</h1>

            <div style={{ display: 'flex', overflowX: 'auto', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div style={{ display: 'flex' }}>
                    {movies && movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movieslist;
