import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';

dotenv.config();

const secret = 'secrete123';
const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const tokenGenerate = (userName: string): string => {
  const token: string = jwt.sign({ data: userName }, secret, jwtConfig);
  return token;
};

export default tokenGenerate;
