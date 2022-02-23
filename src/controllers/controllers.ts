import { Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import { OrderProducts } from '../Interface/OrderInterface';
import { ProductInterface } from '../Interface/ProductInterface';
import { UserInterface } from '../Interface/UserInterface';
import services from '../services/services';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } :UserInterface = req.body;

  const { status, response } = await services.createUser({ username, classe, level, password });
  
  return res.status(status).json(response);
};

const getByName = async (req: Request, res: Response) => {
  const { username, password } :UserInterface = req.body;

  const { status, response } = await services.getByName({ username, password });
  
  return res.status(status).json(response);
};

const createProduct = async (req: Request, res: Response) => {
  const { authorization }: IncomingHttpHeaders | undefined = req.headers;
  const { name, amount } :ProductInterface = req.body;

  const { status, response } = await services.createProduct(authorization, { name, amount });
  
  return res.status(status).json(response);
};

const getProducts = async (req: Request, res: Response) => {
  const { authorization }: IncomingHttpHeaders | undefined = req.headers;

  const { status, response } = await services.getProducts(authorization);
  
  return res.status(status).json(response);
};

const createOrder = async (req: Request, res: Response) => {
  const { authorization }: IncomingHttpHeaders | undefined = req.headers;
  const { products }: OrderProducts = req.body;

  const { status, response } = await services.createOrder(authorization, products);
  
  return res.status(status).json(response);
};

export default {
  createUser,
  getByName,
  createProduct,
  getProducts,
  createOrder,
};