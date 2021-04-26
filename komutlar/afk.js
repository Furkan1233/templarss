const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = async (client, message, args) => {
const dikkat = client.emojis.cache.get('795751157891858463')
const reddet  = client.emojis.cache.get('795751544405753876')
const tik = client.emojis.cache.get('795751593068331028')
const tikk = client.emojis.cache.get('795751637984608336')
const ayarlarr = client.emojis.cache.get('795751785033498654')
const ayarlarrr = client.emojis.cache.get('795751822953545780')
const hype = client.emojis.cache.get('800111755409358878')
const adam = message.author;
const SEBEP = args.slice(0).join(" ") || `Belirtilmemiş`;
const afke = new Discord.MessageEmbed()
.setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
      .setColor("BLACK")
  .setDescription(`${hype}**»** <@${message.author.id}> **Başarıyla** \`${SEBEP}\` **Nedeniyle AFK Oldun.** ${tikk}`)
  message.channel.send(afke).then(msg => {msg.delete({ timeout: 10000 })})
    db.set(`afk_${adam.id}`, SEBEP);
  db.set(`afk_süre_${adam.id}`, Date.now());
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['afk', 'uzakta'],
  permLevel: 0
};
 
exports.help = {
  name: 'Afk Sistemi',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}