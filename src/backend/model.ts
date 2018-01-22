import {Connection} from "mysql";
import database from './Database';

export class Model{
    protected connection:Connection;
    constructor(){
        this.connection = database;
    }
}