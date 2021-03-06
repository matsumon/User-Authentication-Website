const support = require('../support.js'); // import support functions
const p_support = require('../API/route_api_ingest_support.js'); // import support functions



module.exports = function (app) {
    //#region main page GET Request Handler{}
    app.get('/', function (req, res) {
        res.status(200);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        var time = support.getBasicDate(); // Create time stamp for incident
        var response = "HTTP 200 - OK : PONG! - " + time;
        res.send(response);


        support.log("debug", "HTTP 200 - OK : PONG sent as a result of user request")
    });
    //#endregion
    //#region API interface JSON PUT handler
    app.post('/', function (req, res) {
        res.status(200);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        var time = support.getBasicDate(); // Create time stamp for incident
        var response = "HTTP 200 - OK : API REQUEST RECEIVED - NO ACTION TAKEN USE /API to get access" + time;
        res.send(response);


        support.log("debug", "HTTP 200 - OK : PONG sent as a result of user request")

    });
    //#endregion
    //#region API Handler
    app.post('/API/', function (req, res) {
        support.log("debug", "API Request received, processing request...")

        p_support.parse_http_JsonBody(req).then((json_body) => {

            support.log("debug", `API Request Parsed Result is : ${JSON.stringify(json_body)}`)

            support.log("debug", "API Request Parsed, Evaluating Request for Proper Handling")
            
            // evaluate the request and reply if needed
            p_support.evaluate_API_request(json_body, res);



        }).catch((error) =>{

            support.log("error", `main_handlers.js - app.post(/API/) : Error Executing API request. Message as follows : ${JSON.stringify(error)}`)

            res.status(500);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.setHeader('Access-Control-Request-Method', '*');
            var time = support.getBasicDate(); // Create time stamp for incident
            var response = `HTTP 500 - SERVER ERROR : API REQUEST RECEIVED, UNABLE TO PROCESS DUE TO SERVER ERROR - ${JSON.stringify(error)}` + time;
            res.send(response);


        });

    });
    //#endregion;

}