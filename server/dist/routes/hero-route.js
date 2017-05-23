"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hero_service_1 = require("../services/hero-service");
const Heroes = require('../data');
class HeroRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.heroService = new hero_service_1.HeroService();
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
exports.HeroRouter = HeroRouter;
// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();
exports.default = heroRoutes.router;

//# sourceMappingURL=hero-route.js.map
