const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  const bagl  = client.emojis.cache.get('795454617705250826')
const canlidestek = client.emojis.cache.get('795994904487657503')
const topgg = client.emojis.cache.get('796072314986430504')
const brav = client.emojis.cache.get('799050680303616081')

const menu = new Discord.MessageEmbed().setImage('https://cdn.discordapp.com/attachments/804400335501918208/804762471520010261/standard_2.gif').setTitle(`${client.user.username} Moderasyon Menüsü`).setColor('BLACK').setFooter(client.user.username, client.user.avatarURL()).setTimestamp()
.setDescription(`
**———————————————————————————————**
${brav}**»** **!modlog**     \`mod-log ayarlar\`
${brav}**»** **!banlog-ayarla**     \`banlog ayarlar\`
${brav}**»** **!banyetkilisi-ayarla**     \`banyetkilisi ayarlar\`
${brav}**»** **!bansistem-kapat**     \`bansistemi kapatır\`
${brav}**»** **!muterol**     \`muterol ayarlar\`
${brav}**»** **!sayaç-ayarla**     \`sayaç ayarlar\`
${brav}**»** **!sayaç-kanal-ayarla**     \`sayaç kanal ayarlar\`
${brav}**»** **!sayaç kapat**     \`sayaç kapatır\`
${brav}**»** **!otorol @rol #kanal**     \`otorol ayarlar\`
**———————————————————————————————**
${bagl}**»** __**Bot Bağlantıları**__
**${canlidestek}» [[Destek Sunucum]](https://discord.gg/WFnn8kKyNu) | ${topgg}» [[Bota Oyver]](https://top.gg/bot/${client.user.id}/vote) | ${brav}» [[Botu Sunucuna Ekle]](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**`)

message.channel.send(menu)
  }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['moderasyon', 'mod'],
    permLevel: 0
};

exports.help = {
    name: 'moderasyon',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}