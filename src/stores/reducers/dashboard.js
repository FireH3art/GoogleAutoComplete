import { ADDHISTORY, SHOWHISTORY } from "../actions/dashboard";

const initialState = {
    searchHistory: [],
    currentSearch: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDHISTORY:
            let histArr = [action.info].concat(state.searchHistory)
            return {
                ...state,
                searchHistory: histArr,
                currentSearch: action.info,
            }
        case SHOWHISTORY:
            return {
                ...state,
                currentSearch: action.info,
            }
        default:
            return state;
    }
}