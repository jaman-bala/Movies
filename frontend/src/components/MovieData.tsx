import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";

const MetaData = () => {
    
    return <MovieSection title="Movie Data">
        <div>
            <form>
                <fieldset>
                    <div className="flex flex-col h-64">
                        <div>
                            <MovieDataFormRow title="Name">
                            <input className="movie-data-input" type="text" />
                            </MovieDataFormRow>

                            <MovieDataFormRow title="Studio">
                                        <select className="w-full py-1 rounded-lg">
                                            <option>Stidio 1</option>
                                        </select>
                                </MovieDataFormRow>
                                
                                <MovieDataFormRow title="Series">
                                        <select className="w-full py-1 rounded-lg">
                                            <option>Series 1</option>
                                        </select>
                                </MovieDataFormRow>

                                <MovieDataFormRow title="Series #">
                                        <input className="movie-data-input" type="text" />
                                </MovieDataFormRow>
                        </div>

                            <div className="h-full flex flex-col justify-center">
                                    <div className="flex">
                                        <button
                                        className="movie-data-button bg-green-700 hover:bg-green-600" 
                                        type="submit" 
                                        >
                                            Update
                                            </button>
                                            
                                        <button
                                        className="movie-data-button bg-red-700 hover:bg-red-600"
                                        type="button"
                                        >
                                            Remove
                                            </button>
                                    </div>
                            </div>
                        </div>
                </fieldset>
            </form>
        </div>
        </MovieSection>
    
        

};

export default MetaData;