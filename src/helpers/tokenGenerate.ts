import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export interface JwtInterface {
  expiresIn: string,
  algorithm: string,
}

const secret = 'secrete123';
const jwtConfig: JwtInterface = { expiresIn: '7d', algorithm: 'HS256' };

const tokenGenerate = (userName: string): string => {
  const token: string = jwt.sign({ data: userName }, secret, jwtConfig);
  return token;
};

export default tokenGenerate;
