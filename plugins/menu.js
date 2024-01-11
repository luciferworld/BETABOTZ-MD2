let handler = async (m, { conn, text, usedPrefix, command }) => {
  let txt = `Hi %tag
  I am an Whatsapp ai bot that can help to use various ai features for me.
  
   ◦  *Library:* Baileys
   ◦  *Function:* Role
        
             OWNER
   ┌  ◦ addowner [@user]
   │  ◦ mode
   │  ◦ addprem [@user] <days>
   │  ◦ ban
   │  ◦ getplugin [filename]
   │  ◦ premlist
   │  ◦ limit reset
   │  ◦ restart
   │  ◦ self/public
   │  ◦ setppbot
   │  ◦ setprefix
   │  ◦ sf/df
   └  ◦ unbanwa 
`
}
handler.help = ['menu']
handler.command = /^(menu)?$/i


module.exports = handler
