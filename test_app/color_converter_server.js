/**
 * Created on 03.06.2016.
 */

var express = require("express");
var app = express();
var converter = require("./color_converter");

app.get("/rgbToHex", function(req, res) {
    var red   = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue  = parseInt(req.query.blue, 10);

    var hex = converter.rgbToHex(red, green, blue);
    console.log(hex);
    res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
    var hex = req.query.hex;

    var rgb = converter.hexToRgb(hex);
    console.log(JSON.stringify(rgb));
    res.send(JSON.stringify(rgb));
});

app.listen(3000);
console.log('test_app/color_converter_server gestartet :-) ');
console.log('http://localhost:3000/rgbToHex?red=255&green=255&blue=255');
console.log('http://localhost:3000/hexToRgb?hex=00ff00');