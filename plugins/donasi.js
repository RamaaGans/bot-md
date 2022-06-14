let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [082142108243]
│ • Gopay  [082142108243]
│ • Dana  [082142108243]
│ • Saweria  [https://saweria.co/thesadboy01]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6282142108243
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler