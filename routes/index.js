var express = require('express');
var router = express.Router();
const checkInternetConnected = require('check-internet-connected');

/* GET home page. */
router.get('/', function(req, res, next) {  
    const config = {
      title: 'Unknown',
      timeout: 5000, //timeout connecting to each server(A and AAAA), each try (default 5000)
      retries: 5,//number of retries to do before failing (default 5)
      domain: 'google.com'//the domain to check DNS record of
    }

    checkInternetConnected(config)
      .then(() => {
        config.title = 'Internet available';        
      }).catch((error) => {
        config.title = 'No internet';
      }).finally(() => {
        res.render('index', config );
      });

      
});

module.exports = router;
