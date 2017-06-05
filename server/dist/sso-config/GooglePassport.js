"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
let passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
// Creates a Passport configuration for Google
class GooglePassport {
    constructor() {
        this.UserModel = new UserModel_1.default();
        passport.use(new GoogleStrategy({
            clientID: '691794200081-f7p3au1e8o9aeotqqsn6mreqe8cbij20.apps.googleusercontent.com',
            clientSecret: "4WGSRYDLfBrfz2r3Ej6VcP3T",
            callbackURL: "http://fieldfindersystemtest.azurewebsites.net/auth/google/callback",
            passReqToCallback: true
        }, function (request, accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {
                // To keep the example simple, the user's Google profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Google account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
exports.default = GooglePassport;

//# sourceMappingURL=GooglePassport.js.map
