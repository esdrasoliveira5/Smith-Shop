export interface OrderInterface {
  userId: number,
}

export interface Order extends OrderInterface{
  id: number
}

export interface OrderProducts extends Order {
  products: number[],
}