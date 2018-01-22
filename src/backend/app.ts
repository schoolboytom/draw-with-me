import * as express from 'express'
import indexRoutes from './controllers/index.controller';
import fileRoutes from './controllers/files.controller';
import userRoutes from './controllers/user.controller';

class App {
    public express: any;

    constructor () {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes (): void {
        this.express.use('/', indexRoutes);
        this.express.use('/files', fileRoutes);
        this.express.use('/user', userRoutes);
    }
}

export default new App().express