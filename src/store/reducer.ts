import { Product } from "../components/Product";
import { Store } from "../model/model";
import { Action } from "./actions";


const defaultStore: Store = {
    filter: null,
    data: <Product[]>[],
    searchTerm: ''
}

function reducer(state = defaultStore, action: Action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                data: action.data
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
            }

        case 'SET_SEARCH_TERM' : 
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        default:
            return state
    }
}

export default reducer;