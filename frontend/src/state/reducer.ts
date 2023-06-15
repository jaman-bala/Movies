import { StateType } from "../types/state";

const initialState: StateType = {
    movies: [],
    actors: [],
    categories: [],
    selectedMovieId: null,
    selectedActors: null,
    selectedCategories: null,
    movieName: null,
    movieStudioId: null,
    MovieSeriesId: null,
    movieSeriesNumber: null,
};

export default (state: StateType, action: ActionType) => {
    
}