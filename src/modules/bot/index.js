import express from 'express';
import validate from './helpers/validation';
import messageReceived from './messaging';

const botRouter = express.Router();

botRouter.get('/webhook/', validate);
botRouter.post('/webhook/', messageReceived);

export default botRouter;
