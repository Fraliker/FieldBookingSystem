import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test requests result', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/api/fields/?date=Fri%20Jun%2030%202017%2000:00:00%20GMT-0700%20(Pacific%20Daylight%20Time)&time=undefined&duration=undefined&city=Seattle&state=WA")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
        expect(response.body).to.have.length.above(2);
        for (var i = 0; i < response.body.length; i++) {
            expect(response.body[i]).to.be.an('object');
        }
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('_id');
	    expect(requestResult[0]).to.have.property('fieldId');
        expect(requestResult[0]).to.have.property('fieldType').that.is.an('array');
		expect(response.body).to.not.be.a('string');

	});
	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('address').to.have.property('number').that.is.a('string');
					expect(body[i]).to.have.property('fieldId').that.is.a('number');
					expect(body[i]).to.have.property('description').that.is.a('string');
					expect(body[i]).to.have.property('imageFileURL');
				}
				return true;
			});
	});
});