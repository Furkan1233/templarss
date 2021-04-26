const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args,) => {
  const ping = `${Math.round(client.ws.ping)} MS`;

let embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
.setDescription(`**Gecikme Sürem :** __**${ping}**__`)
.setFooter(client.user.username, client.user.avatarURL())
.setTimestamp();

message.channel.send(embed).then(msg => {msg.delete({ timeout: 60000 })})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping', 'gecikme'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}