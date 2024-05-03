import fetch from "node-fetch"

const nansoffc = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Contoh pemakaian:\n${usedPrefix + command} https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt`
  if (!args[0].match(/spotify/gi)) throw `URL Tidak Ditemukan!`
  await m.react('🕑')
  const urll = args[0]
  try {
    const res = await fetch(`https://api.betabotz.eu.org/api/download/spotify?url=${args[0]}&apikey=${lann}`)
    let jsons = await res.json()
    const { thumbnail, title, name, duration, url } = jsons.result.data
    const { id, type } = jsons.result.data.artist
    let captionvid = `*${title}*`
    let pesan = await conn.sendMessage(m.chat, {
      text: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "SPOTIFY DOWNLOADER",
          body: "",
          thumbnailUrl: thumbnail,
          sourceUrl: NSgc,
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m })
    await conn.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mpeg' }, { quoted: m });
  } catch (e) {
    throw `Server down!`;
  }
}
nansoffc.help = ["spotify"]
nansoffc.tags = ["downloader"]
nansoffc.command = /^(spotify)$/i

nansoffc.fail = null

export default nansoffc