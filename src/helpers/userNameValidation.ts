import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const userNameValidation = (userName: string): ResponseInterface | void => {
  if (userName === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Username is required' } };
  }
  if (typeof userName !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Username must be a string' } };
  }
  if (userName.length < 3) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Username must be longer than 2 characters' }, 
    };
  }
};

export default userNameValidation;