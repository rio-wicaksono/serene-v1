import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

async function nansoffc(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(`https://api.betabotz.eu.org/api/tools/remini?url=${out}&apikey=${lann}`);
      const image = await api.json();
      const { url } = image 
       conn.sendFile(m.chat, url, null, NSnama, m);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}

nansoffc.help = ['remini','hd','hdr'];
nansoffc.tags = ['tools','xyz'];
nansoffc.command = ['remini'];
nansoffc.premium = false;
nansoffc.diamond = true;

export default nansoffc;