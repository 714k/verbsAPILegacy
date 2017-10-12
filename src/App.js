"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const VerbRouter_1 = require("./routes/VerbRouter");
const data = require("./data.json");
// Creates and config an ExpressJS Web Server
class App {
    // Run config methods on the Express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configurate middleware Express
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configurate API endpoints
    routes() {
        let router = express.Router();
        // Placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello API World'
            });
        });
        router.get('/api/v1/verbs', (req, res, next) => {
            const verbs = data;
            res.status(200).json({ data });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/verbs', VerbRouter_1.default);
    }
}
exports.default = new App().express;
