import StatusCode from '../enums/StatusCode';
import { ResponseInterfaceError } from '../Interface/ResponseInterface';

const amountValidation = (amount: string): ResponseInterfaceError | void => {
  if (amount === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Amount is required' } };
  }
  if (typeof amount !== 'string') {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Amount must be a string' } };
  }
  if (amount.length < 3) {
    return {
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Amount must be longer than 2 characters' }, 
    };
  }
};

export default amountValidation;