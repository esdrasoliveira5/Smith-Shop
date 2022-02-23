import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { UserInterface, User, UserLogin } from '../Interface/UserInterface';
import { Product, ProductInterface, ProductOrder } from '../Interface/ProductInterface';

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

export default {
  createUser,
  getByName,
  createProduct,
  getProducts,
};
