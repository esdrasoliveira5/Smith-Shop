import StatusCode from '../enums/StatusCode';
import { ResponseInterface } from '../Interface/ResponseInterface';

const classeValidation = (classe: string): ResponseInterface | void => {
  if (classe === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Classe is required' } };
  }
  if (typeof classe !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Classe must be a string' } };
  }
  if (classe.length < 3) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Classe must be longer than 2 characters' }, 
    };
  }
};

export default classeValidation;