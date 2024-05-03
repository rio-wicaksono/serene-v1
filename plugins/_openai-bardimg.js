import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let nansoffc = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || '' 
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download()
    await m.reply(wait)    
    try {
      let media = await uploadImage(buffer)
      let json = await (await fetch(`https://api.betabotz.eu.org/api/search/bard-img?url=${media}&text=${text}&apikey=${lann}`)).json()  
      conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
    } catch (err) {
      throw `${eror}`
    }
  } else {
    throw `Reply image with command ${usedPrefix + command} pertanyaan`
  }
}

nansoffc.help = ['bardimg']
nansoffc.tags = ['tools','ai']
nansoffc.command = /^(bardimg|bardimage|geminiimg|geminiimage)$/i
nansoffc.diamond = true;

export default nansoffc