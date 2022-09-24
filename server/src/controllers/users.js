import { createPoolCluster } from 'mysql2'
import {UserModel} from '../models/user.model.js'

export async function findUsers(req, res) {
  res.setHeader('Access-Content-Allow-Origin', process.env.FRONTEND_URL)
  const usuarios = await UserModel.find()
  return res.send(usuarios)
}

export async function createUser(req, res) {
  console.log(req.body)
  try {
    const usuarioCreado = await UserModel.create(req.body)
    
    if (usuarioCreado) {
      return res.send(usuarioCreado)
    } else {
      return res.status(409).status('No se pudo crear usuario.')
    }
  } catch (error) {
    return res.status(401).status(error)
  }
  
}