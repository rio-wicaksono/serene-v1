
let handler = async (m, { conn, text }) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

    text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`*❏ KE PENGGUNA*  Tag pengguna, tulis nomor atau balas pesan pengguna yang ingin anda RESET.`)
    if(isNaN(number)) return m.reply(`❏ Nomor yang Anda masukkan tidak valid`)

      try { 
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    	let number = user.split('@')[0]
        delete global.global.db.data.users[user]
        conn.reply(m.chat, `*❏ Pengguna telah direset*\n\n✅ Telah dilakukan reset pada pengguna dengan *${number}* dari *DATABASE*`, null, { mentions: [user] })
    }
    
}
handler.help = ['reset-user']
handler.tags = ['owner']
handler.command = ['reset-user', 'resetuser'] 
handler.rowner = true

export default handler
