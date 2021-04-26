const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
     const etiketle = new Discord.MessageEmbed()
 .setColor('BLACK')
 .setDescription('**Lütfen Birisini Etiketle Veya IDsini Gir.**')
 .setFooter(client.user.username, client.user.avatarURL())
     .setTimestamp()
let user  
if(message.mentions.members.first()) user = message.mentions.members.first()

if(!user && args[0]) user = message.guild.members.cache.get(args[0])
if(!user) return message.reply(etiketle).then(msg => {msg.delete({ timeout: 60000 })})
  const degil = new Discord.MessageEmbed()
 .setColor('BLACK')
 .setDescription('**Bu Kullanıcı Bir Ses Kanalında Değil.**')
 .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
     const bura = new Discord.MessageEmbed()
 .setColor('BLACK')
 .setDescription(`${user} **Adlı Kullanıcı** __**<#${user.voice.channelID}>**__ **Adlı Ses Kanalında.**`)
      .setFooter(client.user.username, client.user.avatarURL())
     .setTimestamp()

let sonuc 
if(!user.voice.channelID) sonuc = degil
if(user.voice.channelID) sonuc = bura

message.channel.send(sonuc).then(msg => {msg.delete({ timeout: 60000 })})

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seskontrol', 'kontrol', 'ses-kontrol'],
  permLevel: 0
}

module.exports.help = {
  name : 'Ses Kontrol',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}