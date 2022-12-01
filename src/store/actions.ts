import { Product, ProductDetail } from "../components/Product"
import { Filter } from "../model/model";

type SetProductAction = { type: 'SET_PRODUCTS', data: Product[] };
export const setProducts = (data: Product[]): SetProductAction => {
    return {
      type: 'SET_PRODUCTS',
      data,
    }
  }

type SetProductDetailAction = { type: 'SET_DETAIL', productDetail: ProductDetail };
export const setDetail = (productDetail: ProductDetail): SetProductDetailAction => {
    return {
      type: 'SET_DETAIL',
      productDetail,
  }
}

type SetFetchDataAction = { type: 'SET_FETCH_DATA', fetchData: Product[] };
export const setFetchData = (fetchData: Product[]): SetFetchDataAction => {
    return {
        type: 'SET_FETCH_DATA',
        fetchData
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
export const setSearchTerm = (searchTerm: string) : SetSearchTerm => {
        return {
        type: 'SET_SEARCH_TERM',
        searchTerm
    }
}

export type Action = SetFetchDataAction | SetLoadingAction | SetProductAction | SetFilter | SetSearchTerm | SetProductDetailAction;