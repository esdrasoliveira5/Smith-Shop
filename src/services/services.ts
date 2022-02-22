import StatusCode from '../enums/StatusCode';
import classeValidation from '../helpers/classeValidation';
import levelValidation from '../helpers/levelValidation';
import passwordValidation from '../helpers/passwordValidation';
import tokenGenerate from '../helpers/tokenGenerate';
import userNameValidation from '../helpers/userNameValidation';
import { UserInterface } from '../Interface/UserInterface';
import models from '../models/models';

const createUser = async ({ username, classe, level, password } : UserInterface) => {
  const usernameV = userNameValidation(username);
  const classeV = classeValidation(classe);
  const levelV = levelValidation(level);
  const passwordV = passwordValidation(password);
  if (usernameV !== true) return usernameV;
  if (classeV !== true) return classeV;
  if (levelV !== true) return levelV;
  if (passwordV !== true) return passwordV;

  const token = tokenGenerate(username);
  await models.createUser({ username, classe, level, password });

  return { status: StatusCode.CREATED, response: token };
};

export default {
  createUser,
};