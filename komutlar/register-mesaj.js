const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const jdb = new db.table("uyarılar");
const kdb = new db.table("kullanici");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["798644896453230603"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 

return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\



let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let zaman = args[1]
let sebep = args[2]
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`<@&${ayarlar.kayıtROL}> Arkadaşlar Kayıt Olmak İçin (!tag,tag) Yazarak Botun Gönderdiği Mesajdaki Emojiyi Adınızın Başına Sonuna Veya Herhangi Biryerine Koyarsanız Otomatik Olarak Size Verilicek Roller ( <@&${ayarlar.princeROL}> , <@&${ayarlar.squadreROL}> ) Rolleri Sizlere Verilicektir {İsim},{Yaş} <@&${ayarlar.registerROL}> Sorumlularına Bildirerek Kayıt İşleminiz Tamamiyle Tamamlanacaktır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp());
 

                };

  

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['regmesaj'],
    permLevel: 0,
}

exports.help = {
      name: "registermesaj"  
  
}