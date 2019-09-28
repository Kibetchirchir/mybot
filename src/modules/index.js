import botRouter from './bot';

const routes = (app) => {
  app.use(botRouter);
};

export default routes;
