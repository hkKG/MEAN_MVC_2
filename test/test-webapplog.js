/**
 * Created on 09.06.2016.
 * ping 127.0.0.1
 *
 * webapplog.com/tdd
 *
 * chaijs.com/guide/stylis
 *
 * visionmedia.github.io/superagent
 * visionmedia.github.io/superagent/#parsing-respons-bodies
 *
 */

var request = require("superagent");
var chai = require("chai"),
    assert = chai.assert, // JUnit, TDD => with/wihout - optional message
    expect = chai.expect, // BDD
    should = chai.should(); // BDD

describe("### test-webapplog.js ==> http://localhost:1337  ###", function () {
    it("returns status 200 for /", function (done) {
        request
           // .get('http://localhost:1337')
            .get('http://127.0.0.1:1337')
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                res.status.should.equal(200);
                res.status.should.eql(200);
                //------------------------
                expect(res.status).equal(200);
                assert(res.statusCode == 200);
                done();
            });
    });
});
