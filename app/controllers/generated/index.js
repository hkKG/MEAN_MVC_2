/**
 * Created on 01.06.2016.
 */
exports.render = function(req, res) {
    res.render('./generated/index', {
        title: 'Express'
    });
};
