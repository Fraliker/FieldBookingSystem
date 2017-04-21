import {Router, Request, Response, NextFunction} from 'express';
import {HeroService} from '../services/hero-service';
const Heroes = require('../data');

export class HeroRouter {
  router: Router
  heroService: HeroService;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.heroService = new HeroService();
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/api/heroes', this.heroService.getAll);
    this.router.get('/api/heroes/:id', this.heroService.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;