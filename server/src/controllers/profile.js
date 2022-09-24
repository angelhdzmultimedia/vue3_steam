import {UserModel} from '../models/user.model.js'

export async function findProfile(req, res, next) {
  try {
    res.setHeader('Access-Content-Allow-Origin', process.env.FRONTEND_URL)
    return res.send(req.user)
  } catch (error) {
    console.log(error);
    return res.status(404).send('User not found.')
  }
 }

 export async function updateProfile(req, res) {
  const {steam_id} = req.params
  const body = req.body
  const foundUser = await UserModel.findOne({where: {steam_id}})

  if (foundUser) {
    const updatedUser = await UserModel.update(req.body, {where: {steam_id}})
    return res.send(updatedUser)
  }
  return res.status(404).send('User not found.')
 }