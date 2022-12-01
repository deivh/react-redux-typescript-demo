export type Product = {
    UPC: string
    name: string
    price: {
      current: {
        value: number
      }
      currency: string
    }
    availability: {
      stock: number
    }
  }

  export type ProductDetail = {
    UPC: string
    availability: {
      stock: number
    }
    brand: string
    "color-code": string
    "color-variants": ProductDetail[]
    img: string
    "lens-color": string
    model: string
    name: string
    price: {
      current: {
        value: number
      }
      currency: string
    }
    size: string
  }