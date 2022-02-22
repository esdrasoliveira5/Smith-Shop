import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const classeValidation = (classe: string): ResponseInterface | boolean => {
  if (classe === undefined) {
    return { status: StatusCode.NOT_FOUND, response: { error: 'classe is required' } };
  }
  if (typeof classe !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Classe must be a string' } };
  }
  if (classe.length < 2) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Classe must be longer than 2 characters' }, 
    };
  }
  return true;
};

export default classeValidation;