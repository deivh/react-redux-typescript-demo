import { Product } from "../components/Product"

export type Store = {
  data: Product[],
  filter: boolean | null,
  searchTerm: string,
  fetchData: Product[]
}

export type Filter = boolean | null;