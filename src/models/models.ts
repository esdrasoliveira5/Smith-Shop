import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { UserInterface, User, UserLogin } from '../Interface/UserInterface';
import { Product, ProductInterface, ProductOrder } from '../Interface/ProductInterface';
import { Order } from '../Interface/OrderInterface';

const createUser = async (user: UserInterface): Promise<UserInterface> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  
  const { insertId: id } = result;

  const insertedUser: User = { id, username, classe, level, password };

  return insertedUser;
};

const getByName = async (user: UserLogin): Promise<User[]> => {
  const { username, password } = user;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [data] = await connection.execute(query, [username, password]);
  return data as User[];
};

const createProduct = async (product: ProductInterface): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount ) VALUES (?, ?)', 
    [name, amount],
  );
  
  const { insertId: id } = result;

  const isertedProduct: Product = { id, name, amount };

  return isertedProduct;
};

const getProducts = async (): Promise<ProductOrder[]> => {
  const [data] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return data as ProductOrder[];
};

const createOrder = async (userId: number): Promise<Order> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId ) VALUES (?)', 
    [userId],
  );
  
  const { insertId: id } = result;

  const isertedOrder: Order = { id, userId };

  return isertedOrder;
};

const updateProduct = async (order: number, productId: number) => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  await connection.execute<ResultSetHeader>(query, [order, productId]);
};

const getOrderById = async (id: string): Promise<Product[]> => {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [data] = await connection.execute(query, [id]);
  return data as Product[];
};

export default {
  createUser,
  getByName,
  createProduct,
  getProducts,
  createOrder,
  updateProduct,
  getOrderById,
};
