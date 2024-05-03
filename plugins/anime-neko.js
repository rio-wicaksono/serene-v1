import fetch from 'node-fetch'

let nansoffc = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url, json.url, ``.trim(), m)
}
nansoffc.help = ['neko']
nansoffc.tags = ['anime']
nansoffc.command = /^(neko)$/i

export default nansoffc