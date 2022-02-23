import { Product, ProductOrder } from './ProductInterface';

export interface ResponseInterface{
  status: number,

}

export interface ResponseInterfaceError extends ResponseInterface{
  response: {
    error: string
  },
}

export interface ResponseInterfaceToken extends ResponseInterface {
  response: {
    token: string
  },
}

export interface ResponseInterfaceProduct extends ResponseInterface {
  response: {
    item: Product
  },
}

export interface ResponseInterfaceProducts extends ResponseInterface {
  response: ProductOrder[]
}