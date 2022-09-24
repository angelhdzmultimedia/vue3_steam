import express from 'express'
import passport from 'passport'
import session from 'express-session'
import {config} from 'dotenv'
import cors from 'cors'
//import {connectDB} from './db.js'
import * as profileRoute from './routes/profile.js'
import * as authRoute from './routes/auth.js'
import * as usersRoute from './routes/users.js'
import { loadStrategy } from './strategy.js'
import {join} from 'node:path'

import * as db from './db.js'
import * as UserModel from './models/user.model.js'


config() // Llamar config una sola vez en el main, no hace falta en los demas archivos.
loadStrategy()

const app = express()

app.get('/favicon.ico', (req, res) => {
  res.sendFile(join(process.cwd(), 'public/favicon.ico'))
})

app.use(cors({
  credentials: true,
  origin:  [process.env.FRONTEND_URL, 'https://steamcommunity.com'],
  optionsSuccessStatus: 200,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use(cookieParser(STEAM_SECRET))
app.use(session({
  secret: process.env.STEAM_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
   maxAge: 3600000
  }
 }))

 app.use(passport.initialize())
 app.use(passport.session())

// Rutas
app.use('/api', profileRoute.router)
app.use('/api', authRoute.router)
app.use('/api', usersRoute.router)

app.listen(process.env.BACKEND_PORT, async () => {

 console.log('Express server listening on port '+process.env.BACKEND_PORT+'...')
 console.log (process.env.FRONTEND_PORT)
})