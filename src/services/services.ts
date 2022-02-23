import StatusCode from '../enums/StatusCode';
import amountValidation from '../helpers/amountValidation';
import classeValidation from '../helpers/classeValidation';
import levelValidation from '../helpers/levelValidation';
import nameValidation from '../helpers/nameValidation';
import passwordValidation from '../helpers/passwordValidation';
import tokenGenerate from '../helpers/tokenGenerate';
import tokenValidation from '../helpers/tokenValidation';
import userNameValidation from '../helpers/userNameValidation';
import { ProductInterface } from '../Interface/ProductInterface';
import {
  ResponseInterfaceError, 
  ResponseInterfaceProduct, 
  ResponseInterfaceToken,
  ResponseInterfaceProducts,
} from '../Interface/ResponseInterface';
import { UserInterface, UserLogin } from '../Interface/UserInterface';
import models from '../models/models';

const createUser = async (
  { username, classe, level, password } : UserInterface,
): Promise<ResponseInterfaceError | ResponseInterfaceToken> => {
  const usernameV = userNameValidation(username);
  const classeV = classeValidation(classe);
  const levelV = levelValidation(level);
  const passwordV = passwordValidation(password);
  if (usernameV) return usernameV;
  if (classeV) return classeV;
  if (levelV) return levelV;
  if (passwordV) return passwordV;

  const token = tokenGenerate(username, password);
  await models.createUser({ username, classe, level, password });

  return { status: StatusCode.CREATED, response: { token } };
};

const getByName = async (
  { username, password } : UserLogin,
): Promise<ResponseInterfaceError | ResponseInterfaceToken> => {
  const usernameV = userNameValidation(username);
  const passwordV = passwordValidation(password);
  if (usernameV) return usernameV;
  if (passwordV) return passwordV;

  const response = await models.getByName({ username, password });
  if (response.length === 0) {
    return { status: StatusCode.UNAUTHORIZED, response: { error: 'Username or password invalid' } };
  }
  const token = tokenGenerate(username, password);
  return { status: StatusCode.OK, response: { token } };
};

const createProduct = async (token: string | undefined, { name, amount }: ProductInterface): 
Promise<ResponseInterfaceError | ResponseInterfaceProduct> => {
  const tokenV = await tokenValidation(token);
  const nameV = nameValidation(name);
  const amountV = amountValidation(amount);
  if (tokenV) return tokenV;
  if (nameV) return nameV;
  if (amountV) return amountV;
  
  const response = await models.createProduct({ name, amount });
  return { status: StatusCode.CREATED, response: { item: response } };
};

const getProducts = async (token: string | undefined):
Promise<ResponseInterfaceError | ResponseInterfaceProducts> => {
  const tokenV = await tokenValidation(token);
  if (tokenV) return tokenV;

  const response = await models.getProducts();
  
  return { status: StatusCode.OK, response };
};

export default {
  createUser,
  getByName,
  createProduct,
  getProducts,
};