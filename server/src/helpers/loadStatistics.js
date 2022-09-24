import {join} from 'node:path'
import {Transform} from 'node:stream'
import {Client} from 'qusly-core'


//Mirala aqui
export async function loadStatistics(user) {
  const client = new Client({ pool: 2 });

  await client.connect({
    protocol: 'sftp',
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: process.env.FTP_PORT
  });

  const files = await client.list(process.env.FTP_PATH_DEFAULT)
  

  await client.disconnect();
   
 }