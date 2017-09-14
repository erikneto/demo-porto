var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

/* GET home page. */
router.post('/chat', function (req, res, next) {
    var wcs = watson.conversation({
        username: 'e51d5555-bbce-44c7-b51c-fafb7d037293',
        password: 'ctQFAgPKJqop',
        version: 'v1',
        version_date: '2017-05-26'
    });

    var context = {};
    var mensagem = '';
    wcs.message({
        workspace_id: 'dfdfcbbf-72b1-4308-a622-a0078c0f8c38',
        input: { 'text': mensagem },
        context: context
    }, function (err, response) {
        if (err)
            res.json(err);
        else
            res.json(response);
    });
});

module.exports = router;