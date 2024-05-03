
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 Selamat tinggal, teman-teman! *${this.user.name}* akan keluar dari grup.\n\nSewa telah berakhir.`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
