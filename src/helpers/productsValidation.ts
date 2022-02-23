import StatusCode from '../enums/StatusCode';
import { ResponseInterfaceError } from '../Interface/ResponseInterface';

const productsValidation = (products: number[]): ResponseInterfaceError | void => {
  if (products === undefined) {
    return { status: StatusCode.BAD_REQUEST, response: { error: 'Products is required' } };
  }  
  if (!Array.isArray(products)) {
    return { 
      status: StatusCode.INVALID_FORMAT, 
      response: { error: 'Products must be an array of numbers' },
    };
  }

  if (products.length < 1) {
    return { status: StatusCode.INVALID_FORMAT, response: { error: 'Products can\'t be empty' } };
  }
};

export default productsValidation;
