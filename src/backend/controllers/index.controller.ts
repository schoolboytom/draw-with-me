import {BaseController} from "./base.controller";
let path = require('path');

class IndexController extends BaseController{

    protected routeDefinition(){
        this.router.all('/', function(req, res) {
            res.sendFile(path.resolve('frontend/index.html'));
        });
    }

}
export default new IndexController().router;