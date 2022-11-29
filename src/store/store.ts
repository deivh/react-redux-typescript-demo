import { createStore } from "redux"
import { Product } from "../components/Product"
import reducer from "./reducer"

export const store = createStore(reducer);