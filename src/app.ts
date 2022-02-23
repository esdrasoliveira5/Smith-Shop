import express from 'express';
import 'express-async-errors';
import controllers from './controllers/controllers';
import HandleError from './middlewares/HandleError';

const app = express();

app.use(express.json());

app.post('/users', controllers.createUser);
app.post('/login', controllers.getByName);
app.post('/products', controllers.createProduct);
app.get('/products', controllers.getProducts);
app.post('/orders', controllers.createOrder);

app.use(HandleError.HandleError);

export default app;
