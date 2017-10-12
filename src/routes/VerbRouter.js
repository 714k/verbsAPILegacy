"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Verbs = require('../data');
class VerbRouter {
    /**
        * Initializate the VerbRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
        GET all Verbs
     */
    getAll(req, res, next) {
        res.send(Verbs);
    }
    /**
     * Take each handler, and attach to one of the Express.Routers
     * Endpoints
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.VerbRouter = VerbRouter;
// Create the VerbRouter
const verbRoutes = new VerbRouter();
verbRoutes.init();
exports.default = verbRoutes.router;
