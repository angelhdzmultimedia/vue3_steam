import { Permission } from '../models/permission.model.js'
import {UserModel} from '../models/user.model.js'

export async function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('is auth');
    return next()
  } 
  return res.status(403).send('User not authenticated.')
}

export function logout(req, res) {
 // res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL)
//  res.header('Access-Control-Allow-Credentials', 'true')
  req.logout(function() {
    return res.redirect(`${process.env.FRONTEND_URL}`)
  });
}

export async function steamReturn(req, res) {
  console.log(`[SERVER]: Steam Returns`);
  const {id, displayName, photos} = req.user
  const exists = await UserModel.findOne({where: {steam_id: id}})

 
  // Si no existe, registralo
  if (!exists) {
    console.log(`No existe ${id}, registrando en mysql...`);
    const avatar = photos.map(item => item.value)[2]
    // Registrar usuario en MongoDB
    await UserModel.create({
      steam_id: id, 
      coins: 0, 
      username: displayName,
      permission: Permission.USER,
      avatar,
    })
  }
  // Redirigir a dashboard
  return res.redirect(`${process.env.FRONTEND_URL}/profile`)
 }