const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args,) => {

let embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(`**Destek Sunucum :**\n**[[TIKLA]](https://discord.gg/WFnn8kKyNu)**\n\n**Bota Oyver :**\n**[[BAKIMDA]](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n\n**Botu Sunucuna Ekle :**\n**[[TIKLA]](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**`)
.setFooter(client.user.username, client.user.avatarURL())
.setTimestamp();

message.channel.send(embed).then(msg => {msg.delete({ timeout: 60000 })})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'Davet Et',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}