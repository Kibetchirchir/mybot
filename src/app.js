import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import url from './startup/url';
import modules from './modules';

dotenv.config();


const app = express();


const urlToUse = url();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

modules(app);

app.get('/', (req, res) => {
  res.send('HI welcome the url is', url());
});

app.listen(app.get('port'), () => {
  console.log('app listening to port: ');
});
