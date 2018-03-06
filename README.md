# Ultra Simple Web Server #
![Ultra Simple Web Server Logo](https://github.com/onexdata/usws/raw/master/usws-logo.png "Ultra Simple Web Server Logo")


ultra-simple-web-server, usws for short, uses Express and defaults on port 80, serving your /www folder.


## Usage

Basic... (returns an express app that you can extend, port 80, www folder)
```
var app = require('usws').listen()
```

Intermediate... (returns express app, port 8001, /statics folder)
```
var app = require('usws').listen(8001, '/statics')
```

Advanced... (returns express app, port 8080, /statics folder, custom call back, and extends the express app with a custom login route...)
```
var app = require('usws').listen(8080, '/statics')
app.get'/login', function(req, res){ 
  // Do your special login stuff here
  console.log(req.ip, 'wants to login! Lets give them something special...')
})

```

Want to know more about how you can extend it? Just check out the [Express documentation](https://expressjs.com/en/4x/api.html)