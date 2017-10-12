import { Router, Request, Response, NextFunction } from 'express';
const Verbs = require('../data');

export class VerbRouter {
	router: Router;

	/**
		* Initializate the VerbRouter
	 */
	constructor() {
		this.router = Router();
		this.init();
	}

	/**
		GET all Verbs
	 */
	public getAll(req: Request, res: Response, next: NextFunction) {
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

// Create the VerbRouter
const verbRoutes = new VerbRouter();
verbRoutes.init();

export default verbRoutes.router;