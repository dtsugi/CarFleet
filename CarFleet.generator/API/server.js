var _http = require('http');
var _url = require('url');
var _route = require('./router');

function Start() {
    try {
        function onRequest(request, response) {            
            var pathName = _url.parse(request.url).pathname;
            var query = _url.parse(request.url).query;
            console.log("Peticion recibida - Path:" + pathName + " - Query:" + query);
            _route.Route(pathName, query, request, response);
        }
        _http.createServer(onRequest).listen(8000);
        console.log('The Server is running at the port 8000');
    } catch (err) {
        console.log("ERROR FATAL IN FILE Server:" + err);
    }

}

exports.Start = Start;

// var http = require('http');

// http.createServer(function (req, res) {    
//    if (req.method == 'POST') {
//        console.log("ddssa"); 
//       var post_data = '';
//       req.on('data', function (data) {
//          post_data += data;
//       });
//       req.on('end', function () {
//          res.writeHead(200, {'Content-Type': 'text/plain'});
//          res.end('\n');
 
//          console.log('RECEIVED THIS DATA:\n'+ post_data)
 
//       });
//    }
//    else
//    {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('\n');
//    }
 
// }).listen(8000);
// console.log('Server running at http://127.0.0.1:1000/');
