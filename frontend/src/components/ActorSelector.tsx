import ActorSelectorList from "./ActorSelectorList";
import MovieSection from "./MovieSection";

const ActorSelector = () => {
    return (
     <MovieSection title="Actors">
        <div className="flex h-96">
           <ActorSelectorList title="Available">
                <select className="border border-green-500 w-full" size={15}>
                    <option>Actor 1</option>
                </select>
           </ActorSelectorList>


            <ActorSelectorList title="Selected">
                <select className="border border-green-500 w-full" size={15}>
                    <option>Seected 1</option>
                </select>
            </ActorSelectorList>
        </div>
        </MovieSection>
    );
};


export default ActorSelector; 