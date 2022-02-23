export interface ProductInterface {
  name: string,
  amount: string
}

export interface Product extends ProductInterface {
  id: number
}

export interface ProductOrder extends ProductInterface {
  orderId: number | null
}