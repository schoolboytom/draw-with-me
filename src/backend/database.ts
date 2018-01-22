import * as mysql from "mysql";
import {Connection} from "mysql";

class Database{

    private config: any = {
        host     : 'localhost',
        user     : '',
        password : '',
        database : 'draw_with_me_dev'
    };

    public connection: Connection;

    constructor(){
        this.connection = mysql.createConnection(this.config);
    }
}
export default new Database().connection;