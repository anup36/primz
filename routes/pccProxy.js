'use strict';

let httpProxy = require('http-proxy');

let config = require('../config.json');

let proxy = new httpProxy.createProxyServer({
  target: config.apiRootUrl,
  headers: {
    host: 'http://162.243.33.7:18681'
  }
});

function pcc(request, response) {
	console.log("pcc", pcc);
  request.url = request.url.replace('pcc', 'PCCIS/V1');
  proxy.web(request, response);
}

module.exports.initialize = function (app) {
  app.get('/pcc*', pcc);
};
