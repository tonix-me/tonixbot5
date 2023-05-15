
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM`
let img= 'https://i.ibb.co/QYLp1vX/icon.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD JAGANNATH BLESS YOUR DAY\n▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Subscribe  Youtube\nhttps://youtube.com/@tonixx\n', img,'https://www.instagram.com/tonix_me', 'Instagram', 'https://t.me/tonix_ne', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
