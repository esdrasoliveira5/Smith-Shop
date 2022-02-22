import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const passwordValidation = (password: string): ResponseInterface | boolean => {
  if (password === undefined) {
    return { status: StatusCode.NOT_FOUND, response: { error: 'Password is required' } };
  }
  if (typeof password !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Password must be a string' } };
  }
  if (password.length < 7) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Password must be longer than 7 characters' }, 
    };
  }
  return true;
};

export default passwordValidation;