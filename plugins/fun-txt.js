
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
     if (!teks) throw `📝 Que escribo? Contoh : *${usedPrefix + command}* Halo, saya nero bot`
      m.react(rwait)
      let img = global.API('lann', '/api/maker/txt', { text: teks }, 'apikey')
      conn.sendFile(m.chat, img, 'img.png', `✅ Lebih baik daripada tulisanmu ✍🏻`, m)
      m.react(done)

  }
  handler.help = ['txt']
  handler.tags = ['fun']
  handler.command = ['txt']
  
  export default handler
  
