
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
 
    if (!text) throw `✳️ ${mssg.useCmd}\n\n*${usedPrefix + command}* <${mssg.amount} o all>`
  
    let all =  Math.floor(global.db.data.users[m.sender].coin)
    let count = args[0].replace('all', all)
     count = Math.max(1, count)
     
    if (isNaN(count)) throw `✳️ ${mssg.isNan}`
  
    if (global.db.data.users[m.sender].coin >= count) {
      global.db.data.users[m.sender].coin -= count
      global.db.data.users[m.sender].bank += count
  
      conn.reply(m.chat, `✅ ${mssg.dep(count)}`, m)
    } else conn.reply(m.chat, `❎ ${mssg.depNan}`, m)
  
  }
  handler.help = ['dep']
  handler.tags = ['econ']
  handler.command = ['dep','depositar'] 
  
  export default handler
  