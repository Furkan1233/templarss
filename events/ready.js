const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
client.user.setActivity(`Templars`,  { type:'STREAMING', url: "https://www.twitch.tv/furkankaragol1" })
}