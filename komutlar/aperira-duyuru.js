const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru Metnini Giriniz.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dmduyuru'],
  permLevel: 4
};

exports.help = {
  name: 'duyuru',
  description: 'Ccrazy V12',
  usage: ''
};