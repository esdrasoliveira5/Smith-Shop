import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const passwordValidation = (password: string): ResponseInterface | void => {
  if (password === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Password is required' } };
  }
  if (typeof password !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Password must be a string' } };
  }
  if (password.length < 8) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Password must be longer than 7 characters' }, 
    };
  }
};

export default passwordValidation;