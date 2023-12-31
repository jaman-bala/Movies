import MovieList from "../components/MovieList";
import MetadataEditor from "../components/MovieData";
import ActorsSection from "../components/ActorSelector";
import CategoriesSection from "../components/CategorySelector";
import { useContext } from "react";
import StateContext from "../state/StateContext";

const MainPage = () => {
    const {state} = useContext(StateContext);
    return (
        <>
        <div className="md:flex">
            <div className="m-2 md:w-3/5">
                <MovieList />
            </div>
            <div className="m-2 md:w-3/5">
                <MetadataEditor />
            </div>
        </div>

        <div className="md:flex">
            <div className="m-2 md:w-1/2">
                <ActorsSection />
            </div>
            <div className="m-2 md:w-1/2">
                <CategoriesSection />
            </div>
        </div>
        </>
    );
};

export default MainPage;