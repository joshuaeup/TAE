let Express = require("express");
let app = Express();
let PORT = 3000;
//any data coming in needs to be json
let bodyParser = require("body-parser");
//predefined data
let solutions = [
    {
      type: "CSS",
      error: "Z-index not working",
      solution:
        "Set position absolute then position where needed for fied coordinated on top."
    },
    {
      type: "Bootstrap",
      error: "col-* is overflowing vertically and moving into footer",
      solution: "Set height to auto"
    }
];
//All Middleware has to be above routes.
//Let's express know that anything recieved in body should be in JSON
app.use(bodyParser.json());

//CORS = Cross Origin Resource Sharing allows request from diffrent urls work 
app.use((req, res, next)  => {
    //* Allows any origin
    res.header("Access-Control-Allow-Origin", "*");
    //Allowing diffrent header types
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //Finished with middleware.
    next();
})
//All Middleware has to be above routes.

//router for backend
var api = Express.Router();

api.get("/solutions", (req, res) => {
    res.json(solutions);
});

api.get("/solutions/:type", (req, res) => {
    var type = req.params.type;
    var result = solutions.filter(solution => solution.type == type)
    res.json(result);
    // res.json(solutions);
});

//post route
api.post("/solutions", (req, res) => {
    console.log(req.body);
    //pushing data into solutions array from the req.body
    solutions.push(req.body);
    //send data in json format
    res.json(req.body)
});

//each time we want to access a route /api must be entered. 
//second param is api router
app.use("/api", api);
app.listen(PORT, () => {
    console.log("app listening at http://localhost:" + PORT + "/solutions");
});

