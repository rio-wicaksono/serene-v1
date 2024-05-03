 
import { sfilemobi, sfilemobiSearch } from '@bochilteam/scraper'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw `✳️ ${mssg.searchTo('sfilemobi', usedPrefix, command)}`
    
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('sfile.mobi')) return m.reply(`❎ ${mssg.noLink('sfile.mobi')}`)
        try {
            let res = await fg.sfileDl(text)
            m.react(rwait) 
            m.reply(`
    ≡ *SFILEMOBI DL*
    
*📌${mssg.name}:* ${res.filename}
*⚖️${mssg.size}:* ${res.filesize}`)
           await conn.sendFile(m.chat, res.url, res.filename, '', m, null, { mimetype: res.mimetype, asDocument: true })
            m.react(done)
        } catch (e) {
            m.reply(`✳️ ${mssg.error}`)
        }
    } else {
        try {
            let res = await fg.sfileSearch(text)
            let sfi = res.map(x => ` 
📌${mssg.name}: ${x.title}
⚖️${mssg.size}: ${x.size}
🔗${mssg.link}: ${x.link}
   `.trim()).join('\n────────────\n\n');
            m.reply(sfi)
        } catch (e) {
            m.reply(`✳️ ${mssg.error}`)
        }
    }
}
handler.help = ['sfilemobi <text>']
handler.tags = ['dl']
handler.command = /^(sfile(mobi)?)$/i
handler.diamond = true
handler.disabled = false

export default handler
 
