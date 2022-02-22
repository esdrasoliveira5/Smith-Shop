import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const tokenGenerate = (userName: string): string => {
  const token: string = jwt.sign({ data: userName }, secret, jwtConfig);
  return token;
};

export default tokenGenerate;
