var config = {
  port: 80,
  folder: 'www',
  version: '1.0.0',
  CB : function() {
    console.log('Ultra simple web server', config.version)
    console.log('Listening on', config.port)
    console.log('Serving', config.folder)
  }
}

var express = require("express")
var path = require('path')
var app = express()

config.folder = path.join(__dirname, config.folder)

// Simple logger...
function log(req, msg) {
  console.log(`${new Date().toISOString()} ${req.ip} ${msg}`)
}

function listen (userPort, userFolder, userCb) {
  if (userFolder) config.folder = path.join(__dirname, userFolder)
  if (userPort) config.port = userPort
  if (userCb) config.CB = userCb

  // Static default routes...
  app.get(/^(.+)$/, function(req, res){ 
    log(req, req.params[0])
    res.sendFile( req.params[0], {root: config.folder} )
  })
  app.listen(config.port, config.CB)
  return app
}

// Export a listen function...
module.exports = {
  listen: listen,
  log: log,
  app: app,
  express: express
}
