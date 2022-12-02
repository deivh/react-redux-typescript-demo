import { Product, ProductDetail } from "../components/Product";
import { Store } from "../model/model";
import { Action } from "./actions";


const initialStore: Store = {
    filter: null,
    data: [],
    searchTerm: '',
    fetchData: [],
    productDetail: null,
}

function reducer(state = initialStore, action: Action) {
    switch (action.type) {
        case 'SET_PRODUCTS' :
            return {
                ...state,
                data: action.data
            }
        case 'SET_FILTER' :
            return {
                ...state,
                filter: action.filter
            }

        case 'SET_SEARCH_TERM' : 
            return {
                ...state,
                searchTerm: action.searchTerm
            }

        case 'SET_FETCH_DATA' :    
            return {
                ...state,
                fetchData: action.fetchData
            }

        case 'SET_DETAIL' : 
            return {
                ...state,
                productDetail: action.productDetail
            }
        default:
            return state
    }
}

export default reducer;