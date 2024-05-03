
async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let b = users.map((v, i) => `_*${i + 1}.*_ *${v.name}*\nwa.me/${v.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}help`).join('\n')
 m.reply(` 
≡ *${mssg.botlist}*

▢ *${mssg.total}:* ${users.length} 

${b}`) 
  
}
handler.help = ['botlist']
handler.tags = ['jadibot']
handler.command = ['listbot', 'listbots', 'bots', 'jadibot', 'botlist'] 

export default handler
