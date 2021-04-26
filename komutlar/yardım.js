const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  const bagl  = client.emojis.cache.get('795454617705250826')
const canlidestek = client.emojis.cache.get('795994904487657503')
const topgg = client.emojis.cache.get('796072314986430504')
const brav = client.emojis.cache.get('799050680303616081')

const menu = new Discord.MessageEmbed().setTitle(`${client.user.username} Yardım Menüsü`).setColor('BLACK').setFooter(client.user.username, client.user.avatarURL()).setTimestamp()
.setDescription(`
**———————————————————————————————**
${brav}**»** __**Eğlence**__
**Herkesin Kullanabileceği Komutlar.**
\`${prefix}kullanıcı-bilgi, ${prefix}sunucu-bilgi, ${prefix}avatar, ${prefix}ağla, ${prefix}sorusor, ${prefix}şanslısayım, ${prefix}afk, ${prefix}aşkölçer, ${prefix}kaçcm, ${prefix}tokatat, ${prefix}hesapla, ${prefix}taksimdayı\`

${brav}**»** __**Moderasyon**__
**Yetkililerin Kullanabileceği Komutlar.**
\`${prefix}ban, ${prefix}unban, ${prefix}mute, ${prefix}unmute, ${prefix}temizle, ${prefix}isimdeğiştir, ${prefix}sa-as aç-kapat, ${prefix}rolver, ${prefix}rolal, ${prefix}say, ${prefix}seskontrol, ${prefix}otorol\`

${brav}**»** __**Koruma**__
**Yöneticilerin Kullanabileceği Komutlar.**
\`${prefix}reklam-engel aç-kapat, ${prefix}küfür-engel aç-kapat, ${prefix}kanal-koruma aç-kapat, ${prefix}capsengel\`

${brav}**»** __**Bot**__
**Botla İlgili Komutlar.**
\`${prefix}bot-bilgi, ${prefix}davet, ${prefix}destek, ${prefix}ping, ${prefix}yardım, ${prefix}moderasyon, ${prefix}kayıtsistemi\`
**———————————————————————————————**
${bagl}**»** __**Bot Bağlantıları**__
**${canlidestek}» [[Destek Sunucum]](https://discord.gg/WFnn8kKyNu) | ${topgg}» [[Bota Oyver]](https://top.gg/bot/${client.user.id}/vote) | ${brav}» [[Botu Sunucuna Ekle]](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**`)

message.channel.send(menu)
  }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım', 'help'],
    permLevel: 0
};

exports.help = {
    name: 'Yardım Menüsü',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}