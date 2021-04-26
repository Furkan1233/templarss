const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  const bagl  = client.emojis.cache.get('795454617705250826')
const canlidestek = client.emojis.cache.get('795994904487657503')
const topgg = client.emojis.cache.get('796072314986430504')
const brav = client.emojis.cache.get('799050680303616081')

const menu = new Discord.MessageEmbed().setImage('https://cdn.discordapp.com/attachments/803575922561122337/805067971416031232/standard_4.gif').setTitle(`${client.user.username} Kayıt Menüsü`).setColor('BLACK').setFooter(client.user.username, client.user.avatarURL()).setTimestamp()
.setDescription(`
**———————————————————————————————**
${brav}**»** **!yetkili-kayıt-alınacak-rol-ayarla @rol**     \`alınacak rol ayarlar\`
${brav}**»** **!erkek @kullanıcı**     \`erkek kayıt eder\`
${brav}**»** **!kayıt-erkek-rol-ayarla @rol**     \`erkek rol ayarlar\`
${brav}**»** **!kayıtçı-ver @kullanıcı**     \`kayıtçı rolü verir\`
${brav}**»** **!yetkili-giriş-mesajı #kanal**     \`giriş mesajı kanalı ayarlar\`
${brav}**»** **!kadın @kullanıcı **     \`kadın kayıt eder\`
${brav}**»** **!kayıt-kadın-rol-ayarla @rol**     \`kadın rol ayarlar\`
${brav}**»** **!kayıt-yetkili-rol-ayarla @rol**     \`yetkili rol ayarlar\`
${brav}**»** **!yetkili-kayıt-kanal-ayarla #kanal**     \`kayıt kanal ayarlar\`
${brav}**»** **!yetkili-kayıt-sistemini-kapat**     \`kayıt sistemini kapar\`
${brav}**»** **!yetkili-kayıt-log-ayarla #kanal**    \`kayıt log ayarlar\`
${brav}**»** **!kayıtbilgi    \`kayıt stats bilgi verir\`
**———————————————————————————————**
${bagl}**»** **__** **Bot Bağlantıları** **__**n
${canlidestek}» [[Destek Sunucum]](https://discord.gg/qBHTDQ9Mnq) | ${topgg}» [[Bota Oyver]](https://top.gg/bot/${client.user.id}/vote) | ${brav}» [[Botu Sunucuna Ekle]](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)

message.channel.send(menu)
  }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtsistemi', 'kayıt-sistemi'],
    permLevel: 0
};

exports.help = {
    name: 'kayıtsistemi',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}