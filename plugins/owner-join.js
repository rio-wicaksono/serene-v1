let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {

   if (!isOwner) return m.reply(`*Undang bot ke grup*\n\nHalo @${m.sender.split('@')[0]}\nAnda dapat menyewa bot untuk bergabung ke grup\n\n*${usedPrefix}premium*`, null, { mentions: [m.sender] })

  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))

  let name = m.sender
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Kirimkan link Grup\n\n 📌 Contoh:\n *${usedPrefix + command}* <linkwa> <hari>\n\n_angka adalah jumlah Hari bot akan berada dalam grup_`
  if (!code) throw `✳️ Link tidak valid`
  if (!args[1]) throw `📌 Jumlah Hari yang Kurang\n\n Contoh:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ Hanya angka yang mewakili Jumlah Hari yang bot berada dalam grup!`
  let owbot = global.owner[1]
  m.reply(`😎 Tunggu 3 Detik, akan saya bergabung dengan grup`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ Saya berhasil bergabung ke grup \n\n≡ Info Grup \n\n *NSnama :* ${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`)

 if (e.length) await conn.reply(res, `🏮 Hai semuanya

@${owbot} adalah pembuat saya jika ada yang ingin ditanyakan
dia diundang oleh *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `baik semua santai 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *UNDANGAN KE GRUP*\n\n@${m.sender.split('@')[0]} telah mengundang *${conn.user.name}* ke grup\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nBot akan keluar secara otomatis setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *UNDANGAN KE GRUP*\n\n@${m.sender.split('@')[0]} telah mengundang *${conn.user.name}* ke grup\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nBot akan keluar secara otomatis setelah\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✅ Bot berhasil diundang ke grup\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah \n${msToDate(global.db.data.chats[res].expired - now)}`).then(async () => {
     let mes = `Halo semua 👋🏻
     
*${conn.user.name}* adalah salah satu bot WhatsApp yang dibangun dengan Node.js, *${conn.user.name}* baru saja diundang oleh *${m.name}*

untuk melihat Menu bot silakan ketik

*${usedPrefix}help*

@${conn.user.jid.split('@')[0]} akan keluar secara otomatis setelah \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Maaf, bot tidak bisa bergabung dengan grup`
      }
}
handler.help = ['join <chat.whatsapp.com> <hari>']
handler.tags = ['owner']
handler.command = ['join', 'invite']

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}