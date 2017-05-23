"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Heroes = require('../data');
class HeroService {
    /**
     * GET all Heroes.
     */
    getAll(req, res, next) {
        res.send(Heroes);
    }
    /**
     * GET one hero by id
     */
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let hero = Heroes.find(hero => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                hero
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No hero found with the given id.',
                status: res.status
            });
        }
    }
}
exports.HeroService = HeroService;

//# sourceMappingURL=hero-service.js.map
