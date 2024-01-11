let handler = async (m, { conn, text }) => {
    if (!text) throw 'Enter the user you want to ban\n\nExample: .ban 923xxxxxxx'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one of them'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Successfully Banned User`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler
