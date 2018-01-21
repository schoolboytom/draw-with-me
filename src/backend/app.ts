import * as express from 'express'
var path = require('path');

class App {
    public express: any;

    constructor () {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes (): void {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.sendFile(path.resolve('frontend/index.html'));
        });
        router.get('/frontend.bundle.js', (req, res) => {
            res.sendFile(path.resolve('../dist/frontend.bundle.js'));
        });

        router.all('*', function(req, res) {
            res.sendFile(path.resolve('frontend/index.html'));
        });

        this.express.use('/', router)
    }
}

export default new App().express