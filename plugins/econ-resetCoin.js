
let handler = async (m, { conn, text, usedPrefix, command}) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
 
    text = no(text)
  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`✳️ Silakan sebutkan satu pengguna`)
    if(isNaN(number)) return m.reply(`✳️ Nomor yang Anda masukkan tidak valid`)

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
        let num = global.db.data.users[user]
        num.coin = 2
        conn.reply(m.chat, `
✅ Koin telah direset ke @${number}`, m, { mentions: [user] })
    }
    
}
handler.command = ['reset-coin'] 
handler.rowner = true

export default handler
