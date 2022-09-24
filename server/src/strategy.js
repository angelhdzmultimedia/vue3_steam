import passport from 'passport'
import passportSteam from 'passport-steam'
import {UserModel} from './models/user.model.js'


const SteamStrategy = passportSteam.Strategy

export function loadStrategy() {
  passport.serializeUser(async (user, done) => {
    done(null, user)
  });
  
  passport.deserializeUser(async (user, done) => {
    const foundUser = await UserModel.findOne({where: {steam_id: +user.id}})
    if (foundUser) {
      return done(null, foundUser)
    }
    return done(null, false)
  });
  
  passport.use(new SteamStrategy({
    returnURL: 'http://localhost:' + process.env.BACKEND_PORT + '/api/auth/steam/return',
    realm: 'http://localhost:' + process.env.BACKEND_PORT + '/',
    apiKey: process.env.STEAM_KEY,
    }, function (identifier, profile, done) {
      process.nextTick(() => {
        profile.identifier = identifier;
        return done(null, profile);
      })
    }
   ))
  
}