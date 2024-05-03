
let handler = async(m, { conn, usedPrefix, command }) => {
	m.react(rwait)
	let res = await conn.getFile('https://thispersondoesnotexist.com')
	let img = res.data
        await conn.sendFile(m.chat, img, 'img.jpg', `✅ Orang ini tidak ada, ia dibuat dengan menggunakan AI`, m) 
	m.react(done)
}
handler.help = ['person']
handler.tags = ['img']
handler.command = ['persona', 'person']

export default handler
