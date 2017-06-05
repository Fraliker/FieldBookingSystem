"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebookOauth2_1 = require("./facebookOauth2");
let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
// Creates a Passport configuration for Google
class FacebookPassport {
    constructor() {
        this.clientId = facebookOauth2_1.default.id;
        this.secretId = facebookOauth2_1.default.secret;
        passport.use(new FacebookStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "http://fieldfindersystemtest.azurewebsites.net/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'emails']
        }, (accessToken, refreshToken, profile, done) => {
            process.nextTick(() => {
                console.log('validating facebook profile:' + JSON.stringify(profile));
                // Insert user objet, check user oject in mongoose
                this.profile = JSON.stringify(profile);
                this.userId = profile.id;
                this.displayName = profile.displayName;
                this.email = profile.emails[0].value;
                passport.session.displayName = profile.displayName;
                passport.session.email = profile.emails;
                passport.session.userId = profile.id;
                passport.session.user = JSON.stringify(profile);
                console.log("User" + passport.session.displayName);
                return done(null, profile);
            });
        }));
        passport.serializeUser((user, done) => {
            done(null, user);
        });
        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }
}
exports.default = FacebookPassport;

//# sourceMappingURL=FacebookPassport.js.map
