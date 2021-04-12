import express from 'express';
import 'module-alias/register';
import { loadMiddlewares, loadRoutes } from './loaders';

const app = express();
const PORT = process.env.PORT || 4000;

loadMiddlewares(app);
loadRoutes(app);

export { app, PORT };
