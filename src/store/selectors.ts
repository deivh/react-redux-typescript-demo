import { Store } from "../model/model";

export const productsSelector = (state: Store) => state.data;

export const filterSelector = (state: Store) => state.filter;

export const searchSelector = (state: Store) => state.searchTerm;

export const fetchDataSelector = (state: Store) => state.fetchData;