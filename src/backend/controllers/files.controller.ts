import {BaseController} from "./base.controller";
let path = require('path');

class FilesController extends BaseController{
    protected routeDefinition(){
        this.router.get('/frontend.bundle.js', (req, res) => {
            res.sendFile(path.resolve('../dist/frontend.bundle.js'));
        });
    }
}
export default new FilesController().router;