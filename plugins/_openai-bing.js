import fetch from 'node-fetch';

let nansoffc = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  if (command == 'bing') {
    if (!text) throw `Example : ${usedPrefix + command} siapa presiden Indonesia?`;
    try {
      m.reply(wait)
      let response = await fetch('https://api.betabotz.eu.org/api/search/bing-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            apikey: lann
          })
        })
        .then(res => res.json());

      await conn.reply(m.chat, response.message, m);
    } catch (e) {
      console.log(e);
      throw `*Error:* ${eror}`;
    }
  }
  if (command == 'bingimg') {
    if (!text) throw `Contoh: ${usedPrefix + command} anak berlari menggunakan pakaian merah 3d animation`;
    try {
      m.reply(wait)
      let response = await fetch('https://api.betabotz.eu.org/api/search/bing-img', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            apikey: lann
          })
        })
        .then(res => res.json());

      for (let i = 0; i < 4; i++) {
        let img = response.result[i]
        await sleep(3000)
        await conn.sendFile(m.chat, img, 'bing_img.png', `*PROMPT:* ${text}`, m)
      }
    } catch (error) {
      throw `Error: ${eror}`
    }
  }
}

nansoffc.command = nansoffc.help = ['bing', 'bingimg']
nansoffc.tags = ['tools','ai']
nansoffc.premium = false
nansoffc.diamond = true

export default nansoffc

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}