import { Actions, StateType, ActionType } from "../types/state";


export default (state: StateType, action: ActionType) => {
    switch (action.type) {
        case Actions.SetSelectedMovieId:
            return {
                ...state,
                selectMovieId: action.payload,
            }
            default:
                return state;
}
};
