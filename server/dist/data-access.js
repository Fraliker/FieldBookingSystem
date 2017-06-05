"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
//static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3500/frs/?authSource=admin';
DataAccess.DB_CONNECTION_STRING = 'mongodb://dbadmin:test@ds155811.mlab.com:55811/frs';
DataAccess.connect();
exports.default = DataAccess;

//# sourceMappingURL=data-access.js.map
