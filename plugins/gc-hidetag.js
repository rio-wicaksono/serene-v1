import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
let nansoffc = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
nansoffc.help = ['announce', 'hidetag']
nansoffc.tags = ['group']
nansoffc.command = /^(h|ht|announce|hiddentag|hidetag)$/i

nansoffc.group = true
nansoffc.admin = true

export default nansoffc