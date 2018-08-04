var coinController = require('./modules/coins/controllers/coin-controller');

function setup(app){
    app.get('/api/coins', coinController.getCoinsDetails);
};

module.exports = {setup : setup};