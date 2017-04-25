var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Q = require('q');

// Creates and configures a connection to the Mongo Server
export default class DbClient {

  public mongoDBConnection:string = 'mongodb://dbAdmin/test@localhost:3500/classSample';
  public dbConnection:any = null;

  public constructor() {
    if (this.dbConnection == null) {
        MongoClient.connect(this.mongoDBConnection, (err, dbConnection) => {
            this.dbConnection = dbConnection;
            console.log("Connected correctly to MongoDB server.");
        });
    }
  }

  public closeDbConnection() {
    if (this.dbConnection) {
        this.dbConnection.close();
        this.dbConnection = null;
    }
  }

  public accessTransportation(res, query): any  {
    console.log("query Transportation");
    var deferred = Q.defer();

    if (this.dbConnection != null) {
        console.log("Using Connection")
        this.dbConnection.collection('carCollection', (err, nCollection) => {
            nCollection.find(query, (err, cursor) => {
                cursor.toArray( (err, itemArray) => {
                    var list = "<h1>Request</h1>";
                    for (var i = 0; i < itemArray.length; i++) {
                        list += "<h3>" + itemArray[i].vehicle + " : " + itemArray[i].speed + "</h3>";
                    }
                    return deferred.resolve(list);
                });
            });
        });
    }
    else {
        console.log("Connection lost");
    }

    return deferred.promise;
  }
}




