import { Product, ProductDetail } from "../components/Product"

export type Store = {
  data: Product[],
  filter: boolean | null,
  searchTerm: string,
  fetchData: Product[],
  productDetail: ProductDetail
}

export type Filter = boolean | null;