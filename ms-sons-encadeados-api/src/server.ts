import app from "./app";
import * as http from 'http';
import config from './config/config';

http
   .createServer(app)
   .listen(config.server.port, () => 
      console.log(
         `Server is running ${config.server.hostname}:${config.server.port}`
       )
   );