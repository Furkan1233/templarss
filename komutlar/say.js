const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const infinity  = new Discord.MessageEmbed()
    .setTitle(`Sunucu İstatistikleri`)
        .setColor("BLACK")
    .setDescription(`
    **Sunucudaki Toplam Üye Sayısı :** __**${message.guild.memberCount}**__
    **Sunucudaki Toplam Çevrimiçi Üye Sayısı :** __**${çevrimiçi}**__
    **Ses Kanallarındaki Toplam Üye Sayısı :** __**${count}**__
    **Sunucudaki Toplam Bot Sayısı :** __**${botlar}**__`)
        .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(infinity).then(msg => {msg.delete({ timeout: 60000 })})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'MeifyBot',
    usage: 'MeifyBot'
}