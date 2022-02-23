import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';

dotenv.config();

const secret = 'secrete123';
const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const tokenGenerate = (username: string, password: string): string => {
  const token: string = jwt.sign({ data: { username, password } }, secret, jwtConfig);
  return token;
};

export default tokenGenerate;
