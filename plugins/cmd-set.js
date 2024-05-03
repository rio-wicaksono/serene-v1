
let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `✳️ ${mssg.reply}`
    if (!m.quoted.fileSha256) throw `⚠️ ${mssg.reply}`
    if (!text) throw `✳️ Perintah tidak ditemukan`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ Anda tidak memiliki izin untuk mengubah perintah ini menjadi stiker'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ ${mssg.cmdSave}`)
}


handler.help = ['setcmd <text>']
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.rowner = true

export default handler
