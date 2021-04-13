const express = require("express");
const cors = require("cors");
const goodStatus = require("good-status");
const { dbConnection } = require("../database/config.db");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Paths
        this.usersPath = "/api/users";

        //Connection to Database
        this.connectDatabase();

        //Middlewares
        this.middlewares();

        //Routes of my aplication
        this.buildRoutes();
    }


    buildRoutes() {
        //In this route use this file of routes
        this.app.use(this.usersPath, require("../routes/user.route"));

        this.app.get("/api", (req, res) => {
            res.json({
                msg: 'ok'
            })
        });
        this.app.get("/profile", (req, res) => {
            res.unauthorized().json({
                msg: 'unauthorized'
            });
        });
    }

    async connectDatabase() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port: " + this.port)
        });
    }

    middlewares() {
        //Enable Cors
        this.app.use(cors());
        //Read and Parse Body
        this.app.use(express.json());
        //Status Code 
        this.app.use(goodStatus({ send: false, unofficial: true }));
        //Public Directory
        this.app.use(express.static("public"));
    }
}


module.exports = Server;