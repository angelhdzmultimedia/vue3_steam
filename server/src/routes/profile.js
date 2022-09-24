import {Router} from 'express'
import {isAuth} from '../controllers/auth.js'
import {findProfile, updateProfile} from '../controllers/profile.js'

export const router = Router()

router.get('/profile', isAuth, findProfile)
router.patch('/profile/:steam_id', isAuth, updateProfile)