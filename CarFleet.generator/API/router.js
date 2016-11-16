var querystring = require('querystring');

var handle = {};
handle["/"] = true;
handle["/User"] = "./app/MainController";
handle["/Profile"] = true;


function Route(pathName, query, request, response) {
	try {
		var parameters = querystring.parse(query);
		console.log("Routing to - Path:" + pathName + " - Query:" + query);
		var op = parameters["op"];
		if (typeof (handle[pathName]) != 'undefined') {
			var controller = require(handle[pathName]);
			switch (op) {
				case "Connect":
					controller.ProcessRequest(request, response, controller.Connect);
					break;
				case "GetColumns":
					controller.ProcessRequest(request, response, controller.GetColumns);
					break;
				case "GetKeysTable":
					controller.ProcessRequest(request, response, controller.GetKeysTable);
					break;
				default:
					NotFound(response);
					break;
			}
		}
		else {
			NotFound(response);
		}
	} catch (err) {
		console.log("ERROR FATAL IN FILE Router:" + err);
	}
}

function NotFound(response) {
	console.log("ERROR 404 - Not Found");
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.writeHead(404, { 'Content-type': 'text/plain' });
	response.write("404 Not Found");
	response.end();
}

exports.Route = Route;

