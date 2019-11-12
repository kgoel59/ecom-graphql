import 'module-alias/register';
import bodyParser from 'body-parser';
import { ENV } from './config';

import {auth} from '@middlewares/index';
import app from './app';

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true }));
app.express.use(auth(ENV.JWT_ENCRYPTION));

(async () => {
  await app.start(4000);
})();
