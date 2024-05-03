
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   await conn.reply(m.chat, '✳️ Mengapa Anda tidak langsung pergi ke terminal?', m);
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ ${mssg.stopbot}`, m);
    conn.ws.close();
  }
};
handler.help = ['stop'];
handler.tags = ['jadibot'];
handler.command = ['stop', 'stopbot', 'stopjadibot'];
handler.owner = true;

export default handler;
