import { ApolloServer } from 'apollo-server-express';
import express, { Application, Router } from 'express';
import { Sequelize } from 'sequelize';
import to from 'await-to-js';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';

import { resolver as resolvers, schema, schemaDirectives } from '@graphql/index';
import {sqlConnect} from '@database/index';
import {errorHandler, undefinedRoute} from '@middlewares/index';
import {ENV, DB} from '@config/index'

class App {

    public express: Application;
    public router: Router;
    public routes: any;

    public server: ApolloServer;
    public database: Sequelize;

    constructor() {
        // REST Server
        this.express = express();
        this.router = express.Router();
        this.routes = [];

        //database
        if(ENV.NODE_ENV === 'development') {
            this.database = sqlConnect(DB.DEV);
        } else {
            this.database = sqlConnect(DB.PRO);
        }

        // Apollo server
        this.server = new ApolloServer({
            typeDefs: schema,
            resolvers,
            schemaDirectives,
            playground: true,
            context: ({ req }) => {
                let nreq = <any> req;
                let user = nreq.user;
                return {
                    [EXPECTED_OPTIONS_KEY]: createContext(this.database),
                    user: user,
                };
            }
        });

    }

    public mountRoutes(routes: (router: Router) => void) {
        this.routes.push(routes);
    }

    public start(port: string | number| null) {

        const app = this.express;
        const apollo = this.server;
   

        //set up routes
        this.routes.forEach((route) => {
            route(this.router);
        });
        app.use('/', this.router);

        apollo.applyMiddleware({ app });

        // implicit middleware
        app.use(undefinedRoute);
        app.use(errorHandler);

        port = port || ENV.PORT

        app.listen(port ,async () => {
            console.log(`🚀 Server ready on port ${port} at ${apollo.graphqlPath}`);
            
            let err;
            [err] = await to(this.database.sync(
                // {force: true},
            ));
        
            if(err){
                console.error('❌ Error connecting to database:',err);
            } else {
                console.log('🗃️ Successfully connected to Database');
            }
        });
    }
}

export default new App();
