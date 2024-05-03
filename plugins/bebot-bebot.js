import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) { 
m.reply(`
\`CONTOH PENGGUNAAN\`

* .jadibotpairing
* .jadibotqrcode
`.trim())  
}

handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = ['jadibot'] 

export default handler