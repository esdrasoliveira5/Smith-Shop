export interface ProductInterface {
  name: string,
  amount: string
}

export interface Product extends ProductInterface {
  id: number
}