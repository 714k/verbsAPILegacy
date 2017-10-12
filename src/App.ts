import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import VerbRouter from './routes/VerbRouter';

const data = require("./data.json");

// Creates and config an ExpressJS Web Server
class App {
	// Ref to Express instance
	public express: express.Application; 

	// Run config methods on the Express instance
	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
	}

	// Configurate middleware Express
	private middleware(): void {
		this.express.use(logger('dev'));
		this.express.use(bodyParser.json()); 
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	// Configurate API endpoints
	private routes(): void {
		let router = express.Router();

		// Placeholder route handler
		router.get('/', (req, res, next) => {
			res.json({
				message: 'Hello API World'
			});
		});

		router.get('/api/v1/verbs', (req, res, next) => {
			const verbs = data;
			res.status(200).json({data});
		});

		this.express.use('/', router);
		this.express.use('/api/v1/verbs', VerbRouter);
	}
}

export default new App().express;