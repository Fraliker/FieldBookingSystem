import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test request post status', function () {

	var requestResult;
	var response;
	var JSONObj = { "requestId": 100, "duration": 120, "purpose": "little league baseball", "totalPrice": 200, "status": "pending", "requestDateTime": "2016-05-06T03:30:00.000Z", "createdDateTime": "2016-04-19T03:30:00.000Z", "field": { "fieldId": 1, "fieldName": "Ballard Playground Baseball/Softball Field #1", "fieldHourlyPrice": 60, "description": "Ballard Playfield is adjacent to Ballard Community Center and Adams Elementary School. It is a multi-purpose playfield featuring a children's play area and a soccer/baseball/softball field.", "imageFileURL": "https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/MNOP/MagnoliaPlayfield1.jpg", "fieldType": [{ "fieldTypeName": "Grass", "fieldTypeId": 2 }], "sport": [{ "sportName": "Baseball", "sportId": 4 }, { "sportName": "Softball", "sportId": 6 }], "address": { "number": "2644 NW 60th St.", "city": "Seattle", "state": "WA", "zip": "98107" }, "admin": { "adminUserName": "admin1", "adminId": 1, "organization": "organization1", "phoneNumber": "206-618-9002" } }, "user": { "userName": "user1", "userId": 1, "firstName": "Hesham", "lastName": "Alsaeedi", "phoneNo": "206-618-9002", "userEmail": "hisham02@gmail.com" } }

    before(function (done) {
        chai.request("http://fieldfindersystem.azurewebsites.net")
			.post("/api/request/3")
			.send(JSONObj)
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
	it('Should return a 200 status code', function (){
		expect(response).to.have.status(200);
    });
    
	it('Should have known properties', function(){
	    expect(requestResult).to.have.property('requestId');
	    expect(requestResult).to.have.property('duration').that.equals(120);
        expect(requestResult).to.have.property('field').that.has.property('fieldHourlyPrice').that.is.a('number');
		expect(response.body).to.not.be.a('string');

	});

});