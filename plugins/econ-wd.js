
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
 
  if (!text) throw `✳️ ${mssg.wd}`

 // let count = parseInt(args[0])
  let user = global.db.data.users[m.sender]
  let all =  Math.floor(global.db.data.users[m.sender].bank)
  let count = args[0].replace('all', all)
   count = Math.max(1, count)

  if (isNaN(count)) throw `✳️ ${mssg.isNan}`
  if (count > user.bank) throw `✳️ ${mssg.noWd}`

    user.bank -= count
    user.coin += count

    m.reply(`✅ ${mssg.wdYes} *${count.toLocaleString()}🪙*`)
  
}
handler.help = ['wd']
handler.tags = ['econ']
handler.command = ['withdraw','wd', 'retirar']

export default handler
