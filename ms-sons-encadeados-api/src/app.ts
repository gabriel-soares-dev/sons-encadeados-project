import * as express from "express";
import * as bodyParser from "body-parser";
import { Route } from "./routes/route";

class App {

   public app: express.Application;
   public routes: Route = new Route();

   constructor() {
       this.app = express();
       this.routes.routes(this.app);
       this.config();
   }

   private config(): void {

       // support application/json type post data
       this.app.use(bodyParser.json());
       // support application/x-www-form-urlencoded post data
       this.app.use(bodyParser.urlencoded({ extended: false }));
    
    }

}

export default new App().app;