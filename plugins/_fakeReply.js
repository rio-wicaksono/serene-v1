
import fetch from 'node-fetch';
export async function before(m, { conn }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg');

  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: NSgc,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: NSgc
      }
    }
  };

  // Respuesta con enlace de PayPal
  global.rpyp = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: NSgc,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'PayPal',
        body: 'ayuda a mantener el bot activo',
        thumbnailUrl: pp,
        sourceUrl: NSgc
      }
    }
  };

  // Respuesta con enlace de Instagram
  global.rpig = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: NSig,
        mediaType: 'VIDEO',
        description: 'Sigueme por Instagram',
        title: 'Instagram',
        body: 'sigueme por Instagram',
        thumbnailUrl: pp,
        sourceUrl: NSig
      }
    }
  };

  // Respuesta con enlace de YouTube
  global.rpyt = {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: NSgc,
        mediaType: 'VIDEO',
        description: 'Suscribete: ' + NSgc,
        title: 'FG YouTube',
        body: 'aprende a crear tus propios bots',
        thumbnailUrl: pp,
        sourceUrl: NSgc
      }
    }
  }
  
  
  
}
