import Sequelize from 'sequelize'
import {sequelize} from '../db.js'

export const UserModel = sequelize.define('User', {
  'username': Sequelize.STRING,
  'steam_id': Sequelize.STRING,
  'coins': Sequelize.INTEGER,
  'avatar': Sequelize.STRING
}, {timestamps: false})

UserModel.sync()


