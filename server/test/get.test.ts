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
        chai.request("http://fieldfindersystem.azurewebsites.net")
			.get("/api/request/admin/1")
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
	    expect(requestResult[0]).to.have.property('field');
        expect(requestResult[0]).to.have.property('field').that.is.an('object');
		expect(response.body).to.not.be.a('string');

	});
	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('field').to.have.property('admin').to.have.property('adminId').that.equals(1);
					expect(body[i]).to.have.property('requestId').that.is.a('number');
					expect(body[i]).to.have.property('field');
					expect(body[i]).to.have.property('user');
				}
				return true;
			});
	});
});