let nansoffc = async(m, { conn, text, participants }) => {
  let teks = `*${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += ` `
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
nansoffc.help = ['tagall <pesan>']
nansoffc.tags = ['group']
nansoffc.command = /^(tagall)$/i

nansoffc.group = true
nansoffc.admin = true

export default nansoffc