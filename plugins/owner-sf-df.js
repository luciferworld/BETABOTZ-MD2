let fs = require('fs');

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `uhm.. where's the text?\n\nusage:\n${usedPrefix + command} <teks>\n\nexample:\n${usedPrefix + command} menu`;

  if (command === 'sf') {

    if (!m.quoted.text) throw `reply to the message!`;

    let path = `plugins/${text}.js`;

    await fs.writeFileSync(path, m.quoted.text);

    m.reply(`saved in ${path}`);

  } else if (command === 'df') {

    let path = `plugins/${text}.js`;

    if (!fs.existsSync(path)) throw `file plugin ${text}.js not found`;

    fs.unlinkSync(path);

    m.reply(`file plugin ${text}.js deleted successfully`);

  }

};

handler.help = ['sf', 'df'].map(v => v + ' <teks>');

handler.tags = ['owner'];

handler.command = /^(sf|df)$/i;

handler.rowner = true;

module.exports = handler;
