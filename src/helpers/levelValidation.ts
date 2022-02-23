import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const levelValidation = (level: number): ResponseInterface | void => {
  if (level === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Level is required' } };
  }
  if (typeof level !== 'number') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Level must be a number' } };
  }
  
  if (typeof level !== 'number' || level <= 1) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Level must be greater than 0' }, 
    };
  }
};

export default levelValidation;
