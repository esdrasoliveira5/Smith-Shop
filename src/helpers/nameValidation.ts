import StatusCode from '../enums/StatusCode';
import { ResponseInterfaceError } from '../Interface/ResponseInterface';

const nameValidation = (name: string): ResponseInterfaceError | void => {
  if (name === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Name is required' } };
  }
  if (typeof name !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Name must be a string' } };
  }
  if (name.length < 3) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Name must be longer than 2 characters' }, 
    };
  }
};

export default nameValidation;