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

    console.log(path)

    request('http://fhirtest.uhn.ca/baseDstu2/' + path, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            res.json(JSON.parse(body));
        }
        else {
            res.json({
                error: response.statusCode
            });
        }
    })

};
