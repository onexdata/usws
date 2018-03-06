# Ultra Simple Web Server #
![Ultra Simple Web Server Logo](https://github.com/onexdata/usws/raw/master/usws-logo.png "Ultra Simple Web Server Logo")


ultra-simple-web-server, usws for short, uses Express and defaults on port 80, serving your /www folder. It supports basic routing out of the box, which you can pipe to log files. Since it's based on Express, you can also extend it as much as you want.


# Usage

## Ultra simple
Just host your web server already! Put files in your www folder.
```
require('usws').listen()
```

## Simple
returns an express app that you can extend, port 80, www folder.
```
var app = require('usws').listen()
```

## Intermediate
Returns express app, port 8001, /statics folder
```
var app = require('usws').listen(8001, '/statics')
```

## Advanced
Returns express app, port 8080, /statics folder, custom call back, and extends the express app with a custom login route
```
var web = require('usws')

web.app.use('/login/:email/:pass', function(req, res){ 
  // Do your special login stuff here
  web.log(req, 'Login attempt with ' + req.params.email + '/' + req.params.pass)
  res.sendFile( __dirname + '/login.html' )
})

web.listen(8080, '/statics', function() {
  console.log('welcome to my web server!')
})

```
# Methods
## listen(port, folder, callback)
Starts the server.  If you call it with nothing, it will use defaults.  Defaults are port 80, and your ./www folder. It will default to sending "Ultra simple web server [version]" to standard out unless you replace the callback.

## log(req, msg)
Logs a message to the server, where req = an Express request.

## express
The Express instance.

## app
The Express app instance.


Want to know more about how you can extend it? Just check out the [Express documentation](https://expressjs.com/en/4x/api.html)