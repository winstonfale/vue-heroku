var express = require('express');
var request = require("request");
var router = express.Router();

router.get('/', function(req, res) {
    const test = [
        {
            test: 1,
            piste: 3
        }
    ]
   res.json(test)
});

module.exports = router;