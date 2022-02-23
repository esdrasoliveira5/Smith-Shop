import { Request, Response } from 'express';
import { UserInterface } from '../Interface/UserInterface';
import services from '../services/services';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } :UserInterface = req.body;

  const { status, response } = await services.createUser({ username, classe, level, password });
  
  return res.status(status).json(response);
};

const getByName = async (req: Request, res: Response) => {
  const { username, password } :UserInterface = req.body;

  const { status, response } = await services.getByName({ username, password });
  
  return res.status(status).json(response);
};

export default {
  createUser,
  getByName,
};