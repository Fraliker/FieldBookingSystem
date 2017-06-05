import facebookAppAuth from './facebookOauth2';

let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;

// Creates a Passport configuration for Google
class FacebookPassport {

    userId: string;
    public displayName: string;
    public email: string;
    clientId: string;
    secretId: string;
    public profile: string;

    
    constructor() {
        this.clientId = facebookAppAuth.id;
        this.secretId = facebookAppAuth.secret;

        passport.use(new FacebookStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "http://fieldfindersystem.azurewebsites.net/auth/facebook/callback",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                process.nextTick( () => {
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
            }
        ));

        passport.serializeUser((user, done) => {
            done(null, user);
        });

        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }
}
export default FacebookPassport;