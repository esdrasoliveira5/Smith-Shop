import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { UserInterface, User } from '../Interface/UserInterface';

const createUser = async (user: UserInterface): Promise<UserInterface> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  
  const { insertId: id } = result;

  const insertedUser: User = { id, username, classe, level, password };

  return insertedUser;
};

export default {
  createUser,
};
