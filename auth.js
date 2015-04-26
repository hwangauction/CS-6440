/**
 * Created by hwang on 4/22/15.
 */


exports.index = function(req, res){

    var valid = false;

    if (req.body.username == 'demo' && req.body.password == 'demo') {
        valid = true;
    }

    res.json({
        valid : valid
    });
};


