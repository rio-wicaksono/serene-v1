
let handler = async(m, { conn, usedPrefix, command }) => {
	
  let pre = `*≡ SEWA BOT DAN PREMIUM*\n
▢ Grup / 30 Hari
  *5$*
_Bot bergabung dengan 1 grup selama 1 bulan_
      
▢ Premium
  *3$* = 30 Hari
  *20$* = Permanen
_Diamond tak terbatas + Membuka semua perintah premium_

▢ Premium + Grup / 30 Hari
  *6$*
_Kamu mendapatkan premium dan bot bergabung dengan sebuah grup_`
  let img = 'https://i.ibb.co/q0RXdYW/prem2.jpg'
     //conn.sendButton(m.chat, pre, msg.ig(), img, [['✆ Owner', `${usedPrefix}fgowner`]],m)
     conn.sendFile(m.chat, img, 'img.jpg', pre, m, null, rpl)
}
handler.help = ['premium']
handler.tags = ['main']
handler.command = ['alquiler', 'premium', 'alquilar']

export default handler
