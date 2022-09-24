import {Router} from 'express'
import { findUsers, createUser } from '../controllers/users.js'

export const router = Router()

router.get('/users', findUsers)
router.post('/users', createUser)