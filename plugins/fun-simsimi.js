
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {

 let lang = global.db.data.users[m.sender].language
  if (!text) throw `✳️ ${mssg.notext}`
  m.react('🗣️') 
  try { 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=${lang}`)
  let json = await res.json()
  m.reply(json.success.replace('simsimi', `${NSnama}`).replace('Simsimi', `${NSnama}`).replace('sim simi', `${NSnama}`))
} catch {
  m.reply(`❎ Coba lagi nanti. API SimSimi sedang mengalami gangguan`)
}

}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
