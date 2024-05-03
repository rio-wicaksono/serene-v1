import yts from 'yt-search' 
 import fs from 'fs' 
  
 let nansoffc = async (m, {conn, text }) => { 
   if (!text) throw 'Masukkan judul yang ingin kamu cari' 
   await m.react('🕑')
   let results = await yts(text) 
   let tes = results.all 
   let teks = results.all.map(v => { 
     switch (v.type) { 
       case 'video': return ` 
◦ *_${v.title}_* 
◦ *_Durasi :_* ${v.url} 
◦ *_Durasi :_* ${v.timestamp} 
◦ *_Diunggah :_* ${v.ago} 
◦ *_Penonton :_* ${v.views}`}}).filter(v => v).join('\n••••••••••••••••••••••••••••••••••••••••\n') 
   conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m) 
 } 
  
 nansoffc.help = ['yts'] 
 nansoffc.tags = ['dl'] 
 nansoffc.command = /^yts(earch)?$/i 
 nansoffc.diamond = true 
  
 export default nansoffc