import StatusCode from '../enums/StatusCode';
import classeValidation from '../helpers/classeValidation';
import levelValidation from '../helpers/levelValidation';
import passwordValidation from '../helpers/passwordValidation';
import tokenGenerate from '../helpers/tokenGenerate';
import userNameValidation from '../helpers/userNameValidation';
import { UserInterface, UserLogin } from '../Interface/UserInterface';
import models from '../models/models';

const createUser = async ({ username, classe, level, password } : UserInterface) => {
  const usernameV = userNameValidation(username);
  const classeV = classeValidation(classe);
  const levelV = levelValidation(level);
  const passwordV = passwordValidation(password);
  if (usernameV) return usernameV;
  if (classeV) return classeV;
  if (levelV) return levelV;
  if (passwordV) return passwordV;

  const token = tokenGenerate(username);
  await models.createUser({ username, classe, level, password });

  return { status: StatusCode.CREATED, response: { token } };
};

const getByName = async ({ username, password } : UserLogin) => {
  const usernameV = userNameValidation(username);
  const passwordV = passwordValidation(password);
  if (usernameV) return usernameV;
  if (passwordV) return passwordV;

  const response = await models.getByName({ username, password });
  console.log(!response);
  console.log(typeof response);
  
  if (response.length === 0) {
    return { status: 404, response: { error: 'Username or password invalid' } };
  }
  const token = tokenGenerate(username);
  
  return { status: StatusCode.OK, response: token };
};

export default {
  createUser,
  getByName,
};