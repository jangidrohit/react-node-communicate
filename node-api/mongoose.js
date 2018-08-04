var mongoose = require('mongoose');

module.exports.connect = function (cb) {
    var db = mongoose.connect('mongodb://coinmarket:coin_market123@ds111562.mlab.com:11562/coinmarket', {user: '', pass: ''}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log(cb);
            if(cb) cb(db)
        }
    });
};