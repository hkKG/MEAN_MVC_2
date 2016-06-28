/**
 * Created on 03.06.2016.
 *
 * BDD: Behavior Driven Development
 *
 * Given-When-Then Szenarien als Tests
 *
 * Keywords: mocha, test, bdd, tdd, test anything protocol besteht aus UnitTest und TestHarness
 * TestHarness besteht Testausführungs-Engine und TestdatenRepository
 *
 * semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
 *
 * visionmedia.github.io/superagent
 * visionmedia.github.io/superagent/#parsing-respons-bodies
 */
var request = require("superagent");
var chai = require("chai"),
    assert = chai.assert, // JUnit, TDD
    expect = chai.expect, // BDD
    should = chai.should(); // BDD

describe("### superagent-test-color-converter.js ==> RGB to Hex conversion ==> http://localhost:3000/rgbToHex?red=255&green=255&blue=255 ###", function () {
    it("returns status 200", function (done) {
        request
        // .get("http://localhost:3000/rgbToHex?red=255&green=255&blue=255")
            .get("http://127.0.0.1:3000/rgbToHex?red=255&green=255&blue=255")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                expect(res.status).equal(200);
                done();
            });
    });

    it("returns the color in hex", function (done) {
        request
        // .get("http://localhost:3000/rgbToHex?red=255&green=255&blue=255")
            .get("http://127.0.0.1:3000/rgbToHex?red=255&green=255&blue=255")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                // body checken
                var obj = res.toJSON();
                assert(200 == obj.status);
                assert("ffffff" == obj.text)
                done();
            });
    });
});

describe("### superagent-test-color-converter.js ==> Hex to RGB conversion http://localhost:3000/hexToRgb?hex=00ff00 ###", function () {
    it("returns status 200", function (done) {
        request
        // .get("http://localhost:3000/hexToRgb?hex=00ff00")
            .get("http://127.0.0.1:3000/hexToRgb?hex=00ff00")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                expect(res.status).equal(200);
                done();
            });
    });
    it("returns the color in RGB", function (done) {
        request
        // .get("http://localhost:3000/hexToRgb?hex=00ff00")
            .get("http://127.0.0.1:3000/hexToRgb?hex=00ff00")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                // body checken
                var obj = res.toJSON();
                assert(200 == obj.status);
                assert("[0,255,0]" == obj.text)
                done();
            });
    });
});
