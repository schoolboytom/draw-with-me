import * as express from "express";
import * as core from "express-serve-static-core";

export abstract class BaseController{
    protected _router: core.Router;

    constructor(){
        this._router = express.Router();
        this.routeDefinition();
    }

    protected abstract routeDefinition();

    get router(): core.Router {
        return this._router;
    }
}