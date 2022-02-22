import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const levelValidation = (level: number): ResponseInterface | boolean => {
  if (level === undefined) {
    return { status: StatusCode.NOT_FOUND, response: { error: 'Level is required' } };
  }
  if (typeof level !== 'number') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Level must be a number' } };
  }
  if (level < 0) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Level must be greater than 0' }, 
    };
  }
  return true;
};

export default levelValidation;
