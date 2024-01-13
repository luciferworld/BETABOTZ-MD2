const fetch = require('node-fetch');

let handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  
  if (!text) throw `Example: ${usedPrefix + command} A cat in car`;
    try {
      m.reply(wait)
      let response = await fetch(`https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=${text}&apiKey=punyakuaja`)
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


handler.command = handler.help = ['bing', 'bingimg']
handler.tags = ['tools']
handler.limit = true

module.exports = handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
