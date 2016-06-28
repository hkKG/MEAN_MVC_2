// Express routing

// this tells Express to execute the middleware function for any HTTP request
// thet comes though a GET method and is directed to the root path('/'):
module.exports = function(app) {
    var index = require('../../controllers/mean/index.server.controller');
    app.get('/', index.render);
};