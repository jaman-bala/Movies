import MovieSection from "./MovieSection";

const ActorSelector = () => {
    return <MovieSection title="Actors">
        <div className="flex h-96">
           

            <div className="m-2 w-1/2">
                <div>
                    <h2 className="text-center text-lg font-bod">Selected</h2>
                </div>
                <div>
                <select className="border border-green-500 w-full" size={15}>
                        <option>Seected 1</option>
                    </select>
                </div>
            </div>
        </div>
        </MovieSection>
};
export default ActorSelector; 