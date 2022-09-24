import Sequelize from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'nodejs'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch(err => {
    console.log('No se conecto')
  })

