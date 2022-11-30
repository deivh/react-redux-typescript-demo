import { Product } from "../components/Product"
import { Filter } from "../model/model";

type SetProductAction = { type: 'SET_PRODUCTS', data: Product[] };
export const setProducts = (data: Product[]): SetProductAction => {
    return {
      type: 'SET_PRODUCTS',
      data,
    }
  }

type SetFetchDataAction = { type: 'SET_FETCH_DATA', fetchDataType: Product[] };
export const setFetchData = () => {
    return {
        type: 'SET_FETCH_DATA'
    }
}

type SetLoadingAction = { type: 'SET_LOADING', loading: boolean };
export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

type SetFilter = { type: 'SET_FILTER', filter: boolean | null };
export const setFilter = (filter: Filter): SetFilter => ({
    
        type: 'SET_FILTER',
        filter
    
})

type SetSearchTerm = { type: 'SET_SEARCH_TERM', searchTerm: string};
export const setSearchTerm = () => {
    return {
        type: 'SET_SEARCH_TERM'
    }
}

export type Action = SetFetchDataAction | SetLoadingAction | SetProductAction | SetFilter | SetSearchTerm;