import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';
import StatusCode from '../enums/StatusCode';
import { ResponseInterfaceError } from '../Interface/ResponseInterface';
import models from '../models/models';

dotenv.config();

const secret = 'secrete123';
export interface TokenInterface {
  data: {
    username: string;
    password: string;
  };
}

const tokenValidation = async (token: string | undefined):
Promise< ResponseInterfaceError | void > => {
  if (token === undefined) {
    return { status: StatusCode.UNAUTHORIZED, response: { error: 'Token not found' } };
  }
  try {
    const decoded = jwt.verify(token, secret) as TokenInterface;
    const { data: { username, password } } = decoded;
   
    const user = await models.getByName({ username, password });
    if (user.length === 0) {
      return { status: StatusCode.UNAUTHORIZED, response: { error: 'Invalid token' } };
    }
  } catch (error) {
    return { status: StatusCode.UNAUTHORIZED, response: { error: 'Invalid token' } };
  }
};

export default tokenValidation;
