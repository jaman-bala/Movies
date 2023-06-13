import MovieSection from "./MovieSection";

const MovieList = () => {
    return (
        <MovieSection title="Movie List">
            <select className="w-full" size={10}>
                <option>Movie 1</option>
            </select>
        </MovieSection>
    );
};

export default MovieList;