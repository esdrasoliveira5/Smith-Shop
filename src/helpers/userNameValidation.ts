import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const userNameValidation = (userName: string): ResponseInterface | boolean => {
  if (userName === undefined) {
    return { status: StatusCode.NOT_FOUND, response: { error: 'Username is required' } };
  }
  if (typeof userName !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Username must be a string' } };
  }
  if (userName.length < 2) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Username must be longer than 2 characters' }, 
    };
  }
  return true;
};

export default userNameValidation;