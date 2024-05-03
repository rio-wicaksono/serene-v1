import fetch from 'node-fetch'
import api from 'api-dylux'
let nansoffc = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `Contoh pemakaian: ${usedPrefix+command} https://vt.tiktok.com/ZSFejUP4F/`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "🕑",key: m.key,}
  })  
 let cap = `*DOWNLOADER TIKTOK*
 
*Nickname :* ${f.nickname}
*Duration :* ${f.duration}
*Description :* ${f.description}`
conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
}
nansoffc.help = ['tiktok']
nansoffc.tags = ['dl']
nansoffc.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid|ttnowm|tiktoknowm)$/i
nansoffc.limit = true
export default nansoffc