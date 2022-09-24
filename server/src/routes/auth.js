import {Router} from 'express'
import {logout, steamReturn} from '../controllers/auth.js'
import passport from 'passport'

export const router = Router()

router.get('/auth/steam',  passport.authenticate('steam', {failureRedirect: '/error', session: true}))
router.get('/auth/steam/return',  passport.authenticate('steam', {failureRedirect: '/error', session: true}), steamReturn)
router.get('/auth/logout', logout)