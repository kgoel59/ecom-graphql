import 'module-alias/register';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENV,SERVER } from './config';

import {auth} from '@middlewares/index';
import app from './app';

app.express.use(cors({
  origin: SERVER.APP_URL,
  credentials: true,
  optionsSuccessStatus: 200
}));

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true }));
app.express.use(auth(ENV.JWT_ENCRYPTION));

(async () => {
  await app.start(4000);
})();
