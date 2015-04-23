var request = require('request');

exports.proxy = function(req, res){

    var path = req.query.path;

    if (!path) {
        res.json({
            error : 'Invalid path'
        });
        return;
    }

    path += path.indexOf('?') == -1 ?
        '?_format=json' :
        '&_format=json' ;

    request('http://fhirtest.uhn.ca/baseDstu1/' + path, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            res.json(JSON.parse(body));
        }
        else {
            res.json({
                error: response.statusCode
            });
        }
    })

};
