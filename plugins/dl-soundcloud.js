
import axios from 'axios';
import cheerio from 'cheerio';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) throw `✳️ ${mssg.example} :\n${usedPrefix + command} https://on.soundcloud.com/C4hVY`
  if (!text.match(/sound/gi)) throw `❎ ${mssg.noLink('Soundcloud')}`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
  try {
    let res = await soundcloud(text); 
    let info = JSON.parse(JSON.stringify(res))
conn.sendFile(m.chat, info.link, info.title + '.mp3', `
 ≡  *Soundcloud DL*
  
▢ *📌${mssg.title}* : ${info.title}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
      
        } catch {
			await m.reply(`❎ ${mssg.error}`)
} 

}
handler.help = ['soundcloud <url>']
handler.tags = ['dl']
handler.command = ['soundcloud', 'scloud'] 
handler.diamond = false

export default handler



async function soundcloud(url) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.klickaud.co/download.php",
			method: "POST",
			data: new URLSearchParams(Object.entries({'value': url, 'afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a' : '2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e'})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const result = {
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
				NSthumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text()
			}
			resolve(result)
		}).catch(reject)
    })
}
