
import fetch from 'node-fetch'
export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    let lang = user.language
    
      if (!user.chatbot)
        return !0
        try {
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=${lang}`)
        let res = await api.json()
        m.reply(res.success.replace('simsimi', `${NSnama}`).replace('Simsimi', `${NSnama}`).replace('sim simi', `${NSnama}`))
      } catch {
        m.reply(`❎ API SimSimi mengalami gangguan!!\n\nNonaktifkan chatbot dengan */off chatbot*`)
      }
}
